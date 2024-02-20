import { Routes } from '@angular/router';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'topics', component: TopicListComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
