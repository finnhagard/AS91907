using System.ComponentModel.DataAnnotations;

namespace backend.Models;

// make sure all of this matches across the other stuff
// field order follows the apply form on the feature/apply-page branch (currently)

// max lengths have all been arbitrarily set
//max lengths have been updated with absolute highest values - L
//Just realised i probably should have done this on the apply branch but eh its fine
//it'll update eventually

//MIGRATIONS NOT UPDATED

public class Application {
    public int Id { get; set; }

    [MaxLength(50)] public string FirstName { get; set; } = string.Empty;
    [MaxLength(50)] public string LastName { get; set; } = string.Empty;
    [MaxLength(20)] public string? PreferredName { get; set; }
    // nsns are always 20 digits right? - nope 10
    [MaxLength(10)] public string? Nsn { get; set; }
    [MaxLength(320)] public string Email { get; set; } = string.Empty;
    [MaxLength(25)] public string Phone { get; set; } = string.Empty;

    public DateOnly DateOfBirth { get; set; }
    [MaxLength(10)] public string Gender { get; set; } = string.Empty;
    [MaxLength(100)] public string CurrentHighSchool { get; set; } = string.Empty;
    [MaxLength(10)] public string YearLevel { get; set; } = string.Empty;

    [MaxLength(10)] public string Course { get; set; } = string.Empty;
    [MaxLength(25)] public string PreferredTime { get; set; } = string.Empty;
    //I was gonna do 20 for suburb and city but then remembered Tauamatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu (85)
    [MaxLength(250)] public string Address { get; set; } = string.Empty;
    [MaxLength(90)] public string? Suburb { get; set; }
    [MaxLength(90)] public string City { get; set; } = string.Empty;
    [MaxLength(15)] public string? Postcode { get; set; }
    [MaxLength(50)] public string? Country { get; set; } = string.Empty;


    [MaxLength(60)] public string EmergencyContactName { get; set; } = string.Empty;
    [MaxLength(50)] public string EmergencyContactRelationship { get; set; } = string.Empty;
    [MaxLength(320)] public string EmergencyContactEmail { get; set; } = string.Empty;
    [MaxLength(25)] public string EmergencyContactPhone { get; set; } = string.Empty;

    [MaxLength(60)] public string NextOfKinName { get; set; } = string.Empty;
    [MaxLength(50)] public string NextOfKinRelationship { get; set; } = string.Empty;
    [MaxLength(320)] public string NextOfKinEmail { get; set; } = string.Empty;
    [MaxLength(25)] public string NextOfKinPhone { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; }
}