using Forum.Data.Models;
using Forum.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Forum.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        private ITopicService _topicService;

        public TopicController(ITopicService topicService) 
        { 
            _topicService = topicService;
        }

        [HttpGet("GetTopics")]
        public async Task<IEnumerable<Topic>> GetTopicsAsync()
        {
            var topics = await _topicService.GetTopicsAsync();

            return topics;
        }
    }
}
