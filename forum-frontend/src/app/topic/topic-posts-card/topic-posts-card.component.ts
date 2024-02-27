import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'topic-posts-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topic-posts-card.component.html',
  styleUrl: './topic-posts-card.component.css',
})
export class TopicPostsCardComponent {
  @Input() post: Post = {} as Post;
}
