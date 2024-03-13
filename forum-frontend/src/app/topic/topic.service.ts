import { Injectable } from '@angular/core';
import { Topic } from '../shared/models/topic';
import { Observable, of } from 'rxjs';
import { Post } from '../shared/models/post';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private baseUrl?: string;

  constructor(private http: HttpClient, configService: ConfigService) {
    configService.config$.subscribe((value) => {
      this.baseUrl = value.apiUrl;
    });
  }

  getTopics(): Observable<Topic[]> {
    const getTopicsUrl = this.baseUrl + '/api/Topic/GetTopics';

    return this.http.get<Topic[]>(getTopicsUrl);
  }

  getTopicPosts(topicName: string): Observable<Post[]> {
    const posts = of([
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' },
    ]);
    return posts;
  }
}
