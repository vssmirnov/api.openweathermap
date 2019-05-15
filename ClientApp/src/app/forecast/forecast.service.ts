import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ForecastService {
    private city: string;
    private subject = new Subject<WeatherForecast[]>();
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getData(): Observable<WeatherForecast[]> {
        return this.http.get<WeatherForecast[]>(this.baseUrl + 'api/ForecastWeatherData/WeatherForecasts?city=' + this.city).map(response => response);
    }

    changeData(city: string) {
        this.city = city;
        this.subject.next();
    }
}