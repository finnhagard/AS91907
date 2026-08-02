namespace backend.Dtos;

// keep formatting please

public record EnquireDto(
    //personal details
    string FirstName,
    string LastName,
    string Phone,
    string CurrentHighSchool,
    string YearLevel,

    bool CourseIsEnglish,
    bool CourseIsChinese,
    string PreferredTime,

    bool NatureIsInfo,
    bool NatureIsPricing,
    bool NatureIsServices,
    bool NatureIsOther,
    string? OtherEnquiry,
    string EnquiryText);