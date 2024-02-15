import { Component, Input } from '@angular/core';
import { Topic } from '../../shared/topic';

@Component({
  selector: 'topic-card',
  standalone: true,
  imports: [],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.css',
})
export class TopicCardComponent {
  @Input() topic: Topic = {} as Topic;
}
