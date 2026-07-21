namespace backend.Dtos;

public record ApplicationDto(
    string FirstName,
    string LastName,
    DateOnly? DateOfBirth,
    string? Nsn,
    string? Course,
    string Email,
    string? Phone,
    string? Gender,
    string? Address);
