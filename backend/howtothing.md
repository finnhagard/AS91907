# how to do things

1) install docker!!!!
2) docker compose up -d *(this will start mysql)*
3) cd backend && dotnet ef database update *(create/upgrade the table)*
4) dotnet run *(starts the api)*
5) npm run dev (make sure you in the frontend folder while doing this)

**after pulling someone else's work, if `backend/Migrations/` has new files in it, run
`dotnet ef database update --project backend` - their code will expect columns your
database doesn't have yet.**



congratulationz 🎉

## info

the apply form posts to the api, so both have to be up or you will get errors. the api url comes from `frontend/.env.development`.

`docker stop evision-mysql` when you're done for the day.
ctrl+ c to break on the other stuff


## database stuffs!!
(you can also just curl it..)

```powershell
# lists all the applications
docker exec evision-mysql mysql -uroot -pevision_dev_pw --table -e "SELECT Id, FirstName, LastName, Email, Course, SubmittedAt FROM evision.Applications ORDER BY SubmittedAt DESC;"

# clear out all test submissions
docker exec evision-mysql mysql -uroot -pevision_dev_pw -e "DELETE FROM evision.Applications;"
```

ignore any warnings that may pop up about passwords or whatever

## migrations

the c# model (`Models/Application.cs`) and the actual mysql table are two separate
things. a migration is a checked-in file describing one change to the table, so
everyone's database ends up identical from a fresh clone.

**make a new migration whenever you change the `Models/Application.cs` file or
`Data/AppDbContext.cs`** - migration must be made when you are modifying a property in any way, changing a type,
changing a `[MaxLength]`, orrr when you add an index.

you do *not* need to create a migration for changes to `Program.cs` validation, `Dtos/` stuff, or the frontend.

```powershell
1) stop `dotnet run` first! it locks backend.exe and the build will fail
2) write the migration (this only creates files, it doesn't touch the database)
dotnet ef migrations add SomeNameThatDescribesTheChangeThatYouMade --project backend

3) apply it to your database
dotnet ef database update --project backend
```

commit the migration files. make sure to commit all three of them (`.cs`, `.Designer.cs`, and the changed
`AppDbContextModelSnapshot.cs`) or it won't work on anyone else's machine...