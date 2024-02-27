import { Component } from '@angular/core';

@Component({
  selector: 'post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css',
})
export class PostCommentsComponent {
  comments: Comment[] = [];
}
