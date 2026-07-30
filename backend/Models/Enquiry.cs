using System.ComponentModel.DataAnnotations;

namespace backend.Models;

// make sure all of this matches across the other stuff
// field order follows the enquiry form on the feature/enquiry-page branch (currently)

//MIGRATIONS NOT ADDED

public class Application {
    public int Id { get; set; }

    [MaxLength(50)] public string FirstName { get; set; } = string.Empty;
    [MaxLength(50)] public string LastName { get; set; } = string.Empty;
    [MaxLength(25)] public string Phone { get; set; } = string.Empty;
    [MaxLength(100)] public string CurrentHighSchool { get; set; } = string.Empty;
    [MaxLength(10)] public string YearLevel { get; set; } = string.Empty;

    public bool CourseIsEnglish { get; set; } = bool.Empty;
    public bool CourseIsChinese { get; set; } = bool.Empty;
    [MaxLength(25)] public string PreferredTime { get; set; } = string.Empty;

    public bool NatureIsInfo { get; set; } = bool.Empty;
    public bool NatureIsPricing { get; set; } = bool.Empty;
    public bool NatureIsServices { get; set; } = bool.Empty;
    public bool NatureIsOther { get; set; } = bool.Empty;
    [MaxLength(20)] public string? OtherEnquiry { get; set; } = string.Empty;
    [MaxLength(3000)] public string EnquiryText { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; }
}