using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Forum.Data
{
    public class ForumDbContext : IdentityDbContext<IdentityUser>
    {
        public ForumDbContext(DbContextOptions<ForumDbContext> options) : base(options) { }
    }
}
