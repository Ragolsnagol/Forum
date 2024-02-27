import { Component, OnInit } from '@angular/core';
import { TopicCardComponent } from '../topic-card/topic-card.component';
import { TopicService } from '../topic.service';
import { Topic } from '../../shared/models/topic';

@Component({
  selector: 'topic-list',
  standalone: true,
  imports: [TopicCardComponent],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css',
})
export class TopicListComponent implements OnInit {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((topics) => (this.topics = topics));
  }
}
