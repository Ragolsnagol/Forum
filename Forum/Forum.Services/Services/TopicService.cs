using Forum.Data;
using Forum.Data.Models;
using Forum.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Forum.Services.Services
{
    public class TopicService : ITopicService
    {
        private ForumDbContext _context;

        public TopicService(ForumDbContext dbContext) 
        { 
            _context = dbContext;
        }

        public async Task<IEnumerable<Topic>> GetTopicsAsync()
        {
            return await _context.Topics.ToListAsync();
        }
    }
}
