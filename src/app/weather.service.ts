import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

const APP_CODE = environment.app_code;
const APP_ID = environment.app_id;

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    appId: string;
    appCode: string;

    weather = [];
    constructor(private http: HttpClient) {
        this.appId = APP_ID;
        this.appCode = APP_CODE;
    }

    getWeather(coordinates: any) {
        return this.http.jsonp('https://weather.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude='
        + coordinates.latitude + '&longitude=' + coordinates.longitude + '&app_id=' + this.appId + '&app_code='
        + this.appCode, 'jsonpCallback');
    }
}
