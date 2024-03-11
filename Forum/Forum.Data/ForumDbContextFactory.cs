using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace Forum.Data
{
    public class ForumDbContextFactory : IDesignTimeDbContextFactory<ForumDbContext>
    {
        public ForumDbContext CreateDbContext(string[] args)
        {
            // Need to create a dbconfig.json file in ArkRivals.Database if running locally
            var jsonString = File.ReadAllText("dbconfig.json");
            var dbconfig = JsonSerializer.Deserialize<DbConfigJson>(jsonString);

            var opt = new DbContextOptionsBuilder<ForumDbContext>();
            opt.UseNpgsql(dbconfig.ConnectionString);

            return new ForumDbContext(opt.Options);
        }

        private class DbConfigJson
        {
            public string ConnectionString { get; set; } = string.Empty;
        }
    }
}
