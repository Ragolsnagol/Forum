import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPostsCardComponent } from './topic-posts-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopicPostsCardComponent', () => {
  let component: TopicPostsCardComponent;
  let fixture: ComponentFixture<TopicPostsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicPostsCardComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
