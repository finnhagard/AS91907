using System.ComponentModel.DataAnnotations;

namespace backend.Models;

// make sure all of this matches across the other stuff
// field order follows the enquiry form

public class Enquiry {
    public int Id { get; set; }

    [MaxLength(50)] public string FirstName { get; set; } = string.Empty;
    [MaxLength(50)] public string LastName { get; set; } = string.Empty;
    [MaxLength(320)] public string Email { get; set; } = string.Empty;
    [MaxLength(25)] public string Phone { get; set; } = string.Empty;
    [MaxLength(100)] public string CurrentHighSchool { get; set; } = string.Empty;
    [MaxLength(10)] public string YearLevel { get; set; } = string.Empty;

    [MaxLength(10)] public string Course { get; set; } = string.Empty;
    [MaxLength(25)] public string PreferredTime { get; set; } = string.Empty;

    [MaxLength(20)] public string EnquiryNature { get; set; } = string.Empty;
    [MaxLength(20)] public string? OtherEnquiry { get; set; } = string.Empty;
    [MaxLength(3000)] public string EnquiryText { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; }
}