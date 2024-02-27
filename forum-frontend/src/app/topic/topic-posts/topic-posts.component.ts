import { Component, Input, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Post } from '../../shared/models/post';
import { TopicPostsCardComponent } from '../topic-posts-card/topic-posts-card.component';

@Component({
  selector: 'topic-posts',
  standalone: true,
  imports: [TopicPostsCardComponent],
  templateUrl: './topic-posts.component.html',
  styleUrl: './topic-posts.component.css',
})
export class TopicPostsComponent implements OnInit {
  @Input() topicName!: string;
  posts: Post[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService
      .getTopicPosts(this.topicName)
      .subscribe((posts) => (this.posts = posts));
  }
}
