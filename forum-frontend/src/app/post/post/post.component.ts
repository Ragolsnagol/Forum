import { Component } from '@angular/core';
import { PostHeaderComponent } from '../post-header/post-header.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostHeaderComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {}
