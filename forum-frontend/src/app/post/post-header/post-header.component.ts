import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-header',
  standalone: true,
  imports: [],
  templateUrl: './post-header.component.html',
  styleUrl: './post-header.component.css',
})
export class PostHeaderComponent {
  @Input() postName!: string;
  @Input() text!: string;
}
