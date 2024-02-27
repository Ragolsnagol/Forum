import { Injectable } from '@angular/core';
import { Topic } from '../shared/models/topic';
import { Observable, of } from 'rxjs';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor() {}

  getTopics(): Observable<Topic[]> {
    const topics = of([
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' },
    ]);
    return topics;
  }

  getTopicPosts(topicName: string): Observable<Post[]> {
    const posts = of([
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' },
    ]);
    return posts;
  }
}
