import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCardComponent } from './topic-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopicCardComponent', () => {
  let component: TopicCardComponent;
  let fixture: ComponentFixture<TopicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicCardComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
