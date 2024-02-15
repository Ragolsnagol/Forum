import { Injectable } from '@angular/core';
import { Topic } from '../shared/topic';
import { Observable, of } from 'rxjs';

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
}
