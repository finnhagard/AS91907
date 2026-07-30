namespace backend.Dtos;

// keep formatting please

public record EnquireDto(
    //personal details
    string FirstName,
    string LastName,
    string Email,
    string Phone,
    string CurrentHighSchool,
    string YearLevel,

    string Course,
    string PreferredTime,

    bool NatureIsInfo,
    bool NatureIsPricing,
    bool NatureIsServices,
    bool NatureIsOther,
    string? OtherEnquiry,
    string EnquiryText);