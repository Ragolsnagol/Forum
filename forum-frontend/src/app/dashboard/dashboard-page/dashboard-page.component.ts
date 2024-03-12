import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {
  constructor(private http: HttpClient) {}

  onClick() {
    this.http.get('https://localhost:7226/WeatherForecast').subscribe((res) => {
      console.log(res);
    });
  }
}
