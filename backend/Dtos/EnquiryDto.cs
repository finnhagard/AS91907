namespace backend.Dtos;

// keep formatting please

public record EnquiryDto(
    //personal details
    string FirstName,
    string LastName,
    string Email,
    string Phone,
    string CurrentHighSchool,
    string YearLevel,

    string Course,
    string PreferredTime,

    string EnquiryNature,
    string? OtherEnquiry,
    string EnquiryText);