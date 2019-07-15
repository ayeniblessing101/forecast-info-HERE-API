import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  weather = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeather(position.coords);
      });
    } else {
      console.error('This Browser does not support geoloaction...');
    }
   }

  getWeather(coordinates) {
    this.weatherService.getWeather(coordinates)
    .subscribe(result => {
      this.weather = (<any>result).dailyForecasts.forecastLocation.forecast;
    });
  }
}
