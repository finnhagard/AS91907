using System.ComponentModel.DataAnnotations;

namespace backend.Models;

// make sure all of this matches across the other stuff
// field order follows the apply form on the feature/enquiry-page branch (currently)

// max lengths have all been arbitrarily set (just copied from application.cs)
//TO DO (future lucas do this pls): set better lengths

public class Application {
    public int Id { get; set; }

    [MaxLength(60)] public string FirstName { get; set; } = string.Empty;
    [MaxLength(60)] public string LastName { get; set; } = string.Empty;
    [MaxLength(60)] public string? PreferredName { get; set; }
    [MaxLength(20)] public string? Nsn { get; set; }
    [MaxLength(255)] public string Email { get; set; } = string.Empty;
    [MaxLength(35)] public string Phone { get; set; } = string.Empty;

    public DateOnly DateOfBirth { get; set; }
    [MaxLength(20)] public string Gender { get; set; } = string.Empty;
    [MaxLength(150)] public string CurrentHighSchool { get; set; } = string.Empty;
    [MaxLength(20)] public string YearLevel { get; set; } = string.Empty;

    [MaxLength(30)] public string Course { get; set; } = string.Empty;
    [MaxLength(30)] public string PreferredTime { get; set; } = string.Empty;

    [MaxLength(250)] public string Address { get; set; } = string.Empty;
    [MaxLength(250)] public string? Suburb { get; set; }
    [MaxLength(100)] public string City { get; set; } = string.Empty;
    [MaxLength(250)] public string? Postcode { get; set; }
    [MaxLength(250)] public string? Country { get; set; } = string.Empty;


    [MaxLength(200)] public string EmergencyContactName { get; set; } = string.Empty;
    [MaxLength(200)] public string EmergencyContactRelationship { get; set; } = string.Empty;
    [MaxLength(200)] public string EmergencyContactEmail { get; set; } = string.Empty;
    [MaxLength(200)] public string EmergencyContactPhone { get; set; } = string.Empty;

    [MaxLength(200)] public string NextOfKinName { get; set; } = string.Empty;
    [MaxLength(100)] public string NextOfKinRelationship { get; set; } = string.Empty;
    [MaxLength(255)] public string NextOfKinEmail { get; set; } = string.Empty;
    [MaxLength(35)] public string NextOfKinPhone { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; }
}