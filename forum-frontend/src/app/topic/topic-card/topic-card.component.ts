import { Component, Input } from '@angular/core';
import { Topic } from '../../shared/models/topic';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'topic-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.css',
})
export class TopicCardComponent {
  @Input() topic: Topic = {} as Topic;
}
