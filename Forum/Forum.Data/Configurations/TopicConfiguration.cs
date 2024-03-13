using Forum.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Forum.Data.Configurations
{
    public class TopicConfiguration : IEntityTypeConfiguration<Topic>
    {
        public void Configure(EntityTypeBuilder<Topic> builder)
        {
            builder.HasData(
                new Topic
                {
                    Id = 1,
                    Name = "General"
                },
                new Topic
                {
                    Id = 2,
                    Name = "WorldBuilding"
                }
            );
        }
    }
}
