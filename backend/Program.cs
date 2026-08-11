  using System.Net.Mail;
  using backend.Data;
  using backend.Dtos;
  using backend.Models;
  using Microsoft.EntityFrameworkCore;

  var builder = WebApplication.CreateBuilder(args);

  // https://aka.ms/aspnet/openapi
  builder.Services.AddOpenApi();

  var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
  builder.Services.AddDbContext<AppDbContext>(options =>
      options.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 21))));

  // allow the Vite dev server to call the API during local development.
  const string DevCorsPolicy = "DevCors";
  builder.Services.AddCors(options =>
      options.AddPolicy(DevCorsPolicy, policy =>
          policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()));

  var app = builder.Build();

  // config the HTTP request pipeline
  if (app.Environment.IsDevelopment())
  {
      app.MapOpenApi();
      app.UseCors(DevCorsPolicy);
  }

  app.UseHttpsRedirection();

  // the dropdown/radio values the Apply form is allowed to send.
  // if you change these, please make sure to change the <option value> attributes to match.
  var allowedGenders = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
      { "male", "female", "other" };
  var allowedYearLevels = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
      { "year9", "year10", "year11", "year12", "year13" };
  var allowedCourses = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
      { "English", "Chinese" };
  var allowedTimes = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
      { "tuesday-pm", "thursday-pm", "saturday-am" };

  // the same stuff for the enquire form
  var allowedEnquiries = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
      { "Course Information", "Pricing", "Services", "Other" };


  // submit a student application from the Apply form
  app.MapPost("/api/applications", async (ApplicationDto dto, AppDbContext db) =>
  {
      var errors = new Dictionary<string, string[]>();

      // every field marked required* on the form
      var requiredFields = new (string Field, string Label, string? Value)[]
      {
          ("firstName",                    "Given name(s)",                dto.FirstName),
          ("lastName",                     "Surname",                      dto.LastName),
          ("email",                        "Email",                        dto.Email),
          ("phone",                        "Phone",                        dto.Phone),
          ("gender",                       "Gender",                       dto.Gender),
          ("currentHighSchool",            "Current high school",          dto.CurrentHighSchool),
          ("yearLevel",                    "Year level",                   dto.YearLevel),
          ("course",                       "Course",                       dto.Course),
          ("preferredTime",                "Preferred time",               dto.PreferredTime),
          ("address",                      "Address",                      dto.Address),
          ("city",                         "City",                         dto.City),
          ("country",                      "Country",                      dto.Country),
          ("emergencyContactName",         "Emergency contact name",       dto.EmergencyContactName),
          ("emergencyContactRelationship", "Emergency contact relationship", dto.EmergencyContactRelationship),
          ("emergencyContactEmail",        "Emergency contact email",      dto.EmergencyContactEmail),
          ("emergencyContactPhone",        "Emergency contact phone",      dto.EmergencyContactPhone),
          ("nextOfKinName",                "Next of kin name",             dto.NextOfKinName),
          ("nextOfKinRelationship",        "Next of kin relationship",     dto.NextOfKinRelationship),
          ("nextOfKinEmail",               "Next of kin email",            dto.NextOfKinEmail),
          ("nextOfKinPhone",               "Next of kin phone",            dto.NextOfKinPhone),
      };

      foreach (var (field, label, value) in requiredFields)
          if (string.IsNullOrWhiteSpace(value))
              errors[field] = [$"{label} is required!"];

      // email format (only if it was actually filled in)
      if (!errors.ContainsKey("email") && !MailAddress.TryCreate(dto.Email, out _))
          errors["email"] = ["The provided email does not seem to be valid."];
      if (!errors.ContainsKey("emergencyContactEmail") && !MailAddress.TryCreate(dto.EmergencyContactEmail, out _))
          errors["emergencyContactEmail"] = ["The provided email does not seem to be valid."];
      if (!errors.ContainsKey("nextOfKinEmail") && !MailAddress.TryCreate(dto.NextOfKinEmail, out _))
          errors["nextOfKinEmail"] = ["The provided email does not seem to be valid."];

      // date of birth
      var today = DateOnly.FromDateTime(DateTime.UtcNow);
      if (dto.DateOfBirth is not { } dob)
          errors["dateOfBirth"] = ["A Date of birth must be provided.!"];
      else if (dob > today)
          errors["dateOfBirth"] = ["Date of birth can't be in the future."];
      else if (dob < today.AddYears(-120))
          errors["dateOfBirth"] = ["That date of birth doesn't look right."];

      // dropdown / radio values have to be ones we actually offer
      if (!errors.ContainsKey("gender") && !allowedGenders.Contains(dto.Gender))
          errors["gender"] = ["Please pick one of the listed options."];
      if (!errors.ContainsKey("yearLevel") && !allowedYearLevels.Contains(dto.YearLevel))
          errors["yearLevel"] = ["Please pick one of the listed options."];
      if (!errors.ContainsKey("course") && !allowedCourses.Contains(dto.Course))
          errors["course"] = ["Please choose either English or Chinese."];
      if (!errors.ContainsKey("preferredTime") && !allowedTimes.Contains(dto.PreferredTime))
          errors["preferredTime"] = ["Please pick one of the listed options."];

      if (errors.Count > 0)
          return Results.ValidationProblem(errors);

      // feel free to add more fields, just make sure to add them elsewhere too :)
      var application = new Application
      {
          FirstName = dto.FirstName.Trim(),
          LastName = dto.LastName.Trim(),
          PreferredName = dto.PreferredName?.Trim(),
          Nsn = dto.Nsn?.Trim(),
          Email = dto.Email.Trim(),
          Phone = dto.Phone.Trim(),
          DateOfBirth = dto.DateOfBirth!.Value,
          Gender = dto.Gender.Trim(),
          CurrentHighSchool = dto.CurrentHighSchool.Trim(),
          YearLevel = dto.YearLevel.Trim(),

          Course = dto.Course.Trim(),
          PreferredTime = dto.PreferredTime.Trim(),

          Address = dto.Address.Trim(),
          Suburb = dto.Suburb?.Trim(),
          City = dto.City.Trim(),
          Postcode = dto.Postcode?.Trim(),
          Country = dto.Country.Trim(),

          EmergencyContactName = dto.EmergencyContactName.Trim(),
          EmergencyContactRelationship = dto.EmergencyContactRelationship.Trim(),
          EmergencyContactEmail = dto.EmergencyContactEmail.Trim(),
          EmergencyContactPhone = dto.EmergencyContactPhone.Trim(),

          NextOfKinName = dto.NextOfKinName.Trim(),
          NextOfKinRelationship = dto.NextOfKinRelationship.Trim(),
          NextOfKinEmail = dto.NextOfKinEmail.Trim(),
          NextOfKinPhone = dto.NextOfKinPhone.Trim(),

          SubmittedAt = DateTime.UtcNow,
      };

      db.Applications.Add(application);
      await db.SaveChangesAsync();

      return Results.Created($"/api/applications/{application.Id}", new { application.Id });
  })
  .WithName("SubmitApplication");

  app.MapPost("/api/enquiries", async (EnquiryDto dto, AppDbContext db) =>
  {
      var errors = new Dictionary<string, string[]>();

      var requiredFields = new (string Field, string Label, string? Value)[]
      {
          ("firstName",         "Given Name(s)",        dto.FirstName),
          ("lastName",          "Surname",              dto.LastName),
          ("email",             "Email",                dto.Email),
          ("phone",             "Phone",                dto.Phone),
          ("currentHighSchool", "Current High School",  dto.CurrentHighSchool),
          ("yearLevel",         "Year level",           dto.YearLevel),
          ("course",            "Course",               dto.Course),
          ("preferredTime",     "Preferred time",       dto.PreferredTime),
          ("enquiryNature",     "Enquiry Nature",       dto.EnquiryNature),
          ("enquiryText",       "Enquiry",              dto.EnquiryText),
      };

      foreach (var (field, label, value) in requiredFields)
                if (string.IsNullOrWhiteSpace(value))
                    errors[field] = [$"{label} is required!"];

      // email format (only if it was actually filled in)
      if (!errors.ContainsKey("email") && !MailAddress.TryCreate(dto.Email, out _))
          errors["email"] = ["The provided email does not seem to be valid."];

      // dropdown / radio values have to be ones we actually offer
      if (!errors.ContainsKey("yearLevel") && !allowedYearLevels.Contains(dto.YearLevel))
          errors["yearLevel"] = ["Please pick one of the listed options."];
      if (!errors.ContainsKey("course") && !allowedCourses.Contains(dto.Course))
          errors["course"] = ["Please choose either English or Chinese."];
      if (!errors.ContainsKey("preferredTime") && !allowedTimes.Contains(dto.PreferredTime))
          errors["preferredTime"] = ["Please pick one of the listed options."];
      if (!errors.ContainsKey("enquiryNature") && !allowedEnquiries.Contains(dto.EnquiryNature))
          errors["enquiryNature"] = ["Please pick one of the listed options."];

      if (errors.Count > 0)
          return Results.ValidationProblem(errors);

      var enquiry = new Enquiry
      {
          FirstName = dto.FirstName.Trim(),
          LastName = dto.LastName.Trim(),
          Email = dto.Email.Trim(),
          Phone = dto.Phone.Trim(),
          CurrentHighSchool = dto.CurrentHighSchool.Trim(),
          YearLevel = dto.YearLevel.Trim(),

          Course = dto.Course.Trim(),
          PreferredTime = dto.PreferredTime.Trim(),

          EnquiryNature = dto.EnquiryNature.Trim(),
          OtherEnquiry = dto.OtherEnquiry?.Trim(),
          EnquiryText = dto.EnquiryText.Trim(),

          SubmittedAt = DateTime.UtcNow,
      };

      db.Enquiries.Add(enquiry);
      await db.SaveChangesAsync();

      return Results.Created($"/api/enquiries/{enquiry.Id}", new { enquiry.Id });
  })
  .WithName("SubmitEnquiry");

  // this code is "dangerous" as there is no sort of auth at all yet (yay)
  // anyone can fetch any application

  // fetch a single application (used by the 201 Created location, or the admins)
  app.MapGet("/api/applications/{id:int}", async (int id, AppDbContext db) =>
      await db.Applications.FindAsync(id) is { } application
          ? Results.Ok(application)
          : Results.NotFound())
  .WithName("GetApplication");
  //fetch an enquiry
  app.MapGet("/api/enquiries/{id:int}", async (int id, AppDbContext db) =>
      await db.Enquiries.FindAsync(id) is { } enquiry
          ? Results.Ok(enquiry)
          : Results.NotFound())
  .WithName("GetEnquiry");

  // list recent applications
  app.MapGet("/api/applications", async (AppDbContext db) =>
      await db.Applications.OrderByDescending(a => a.SubmittedAt).ToListAsync()).WithName("GetApplications");
  // list recent enquiries
  app.MapGet("/api/enquiries", async (AppDbContext db) =>
      await db.Enquiries.OrderByDescending(a => a.SubmittedAt).ToListAsync()).WithName("GetEnquiries");

  app.Run();