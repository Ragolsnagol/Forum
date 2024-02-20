import { Routes } from '@angular/router';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  { path: 'topics', component: TopicListComponent },
  { path: 'dashboard', component: DashboardPageComponent },
];
