namespace backend.Models;

// make sure all of this stuff matches

public class Application
{
    public int Id { get; set; }

    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    public string? Nsn { get; set; }

    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Course { get; set; }
    public string? Address { get; set; }

    public DateTime SubmittedAt { get; set; }
}
