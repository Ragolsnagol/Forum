import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListComponent } from './topic-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopicListComponent', () => {
  let component: TopicListComponent;
  let fixture: ComponentFixture<TopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicListComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
