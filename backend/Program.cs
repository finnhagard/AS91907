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

// allow the Vite (pronounced veet lucas) dev server to call the API during local development.
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

// submit a student application from the Apply form
app.MapPost("/api/applications", async (ApplicationDto dto, AppDbContext db) =>
{
    // little bit of validation
    var errors = new Dictionary<string, string[]>();
    if (string.IsNullOrWhiteSpace(dto.FirstName))
        errors["firstName"] = ["First name is required!"];
    if (string.IsNullOrWhiteSpace(dto.LastName))
        errors["lastName"] = ["Last name is required!"];
    if (string.IsNullOrWhiteSpace(dto.Email))
        errors["email"] = ["An Email is required!"];

    if (errors.Count > 0)
        return Results.ValidationProblem(errors);

    // feel free to add more fields, just make sure to add them elsewhere too :)
    var application = new Application
    {
        FirstName = dto.FirstName.Trim(),
        LastName = dto.LastName.Trim(),
        Nsn = dto.Nsn?.Trim(),
        Email = dto.Email.Trim(),
        Phone = dto.Phone?.Trim(),
        DateOfBirth = dto.DateOfBirth,
        Gender = dto.Gender?.Trim(),
        Course = dto.Course?.Trim(),
        Address = dto.Address?.Trim(),
        SubmittedAt = DateTime.UtcNow,
    };

    db.Applications.Add(application);
    await db.SaveChangesAsync();

    return Results.Created($"/api/applications/{application.Id}", new { application.Id });
})
.WithName("SubmitApplication");

// fetch a single application (used by the 201 Created location, and by admins)
app.MapGet("/api/applications/{id:int}", async (int id, AppDbContext db) =>
    await db.Applications.FindAsync(id) is { } application
        ? Results.Ok(application)
        : Results.NotFound())
.WithName("GetApplication");

// list recent applications
app.MapGet("/api/applications", async (AppDbContext db) =>
    await db.Applications.OrderByDescending(a => a.SubmittedAt).ToListAsync())
.WithName("GetApplications");

app.Run();
