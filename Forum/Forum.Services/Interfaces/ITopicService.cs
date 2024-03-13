using Forum.Data.Models;

namespace Forum.Services.Interfaces
{
    public interface ITopicService
    {
        Task<IEnumerable<Topic>> GetTopicsAsync();
    }
}
