namespace backend.Dtos;

// keep formatting please

public record ApplicationDto(
    //personal details
    string FirstName,
    string LastName,
    string? PreferredName,
    string? Nsn,
    string Email,
    string Phone,
    DateOnly? DateOfBirth,
    string Gender,
    string CurrentHighSchool,
    string YearLevel,

    string Course,
    string PreferredTime,

    string AddressLine1,
    string? Suburb,
    string City,
    string? Postcode,
    string Country,

    string EmergencyContactName,
    string EmergencyContactRelationship,
    string EmergencyContactEmail,
    string EmergencyContactPhone,

    string NextOfKinName,
    string NextOfKinRelationship,
    string NextOfKinEmail,
    string NextOfKinPhone);