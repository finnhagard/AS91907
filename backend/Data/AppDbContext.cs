using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Application> Applications => Set<Application>();
    public DbSet<Enquiry> Enquiries => Set<Enquiry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Application>()
            .HasIndex(a => a.Email)
            .HasIndex(a => a.SubmittedAt);

        modelBuilder.Entity<Enquiry>()
            .HasIndex(a => a.Email) //Remove this? No email collected. Finn help pls.
            .HasIndex(a => a.SubmittedAt);
    }
}
