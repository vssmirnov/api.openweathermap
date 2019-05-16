import { Component, OnDestroy } from '@angular/core';
import { SearchService } from '../search/search.service';
import { CurrentWeatherService } from './currentWeather.service';
import { Search } from '../models/search.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-current-weather',
    moduleId: module.id,
    templateUrl: 'currentWeather.component.html'
})
export class CurrentWeatherComponent implements OnDestroy {
    currentWeather: Weather;
    subscribtion: Subscription;
    search: Search;
    errorCity: string;

    private observer = {
        next: (data) => {
            this.search.loading = false;
            this.currentWeather = data;
            this.search.loaded = true;
        },
        error: err => {
            this.errorCity = this.search.city;
            this.search.loading = false;
            this.search.isErrorLoading = true;
        },
    };

    constructor(private currentWeatherService: CurrentWeatherService, private searchService: SearchService) {
        this.searchService.display(true);
        this.search = searchService.getCurrentSearch();        
        this.subscribtion = this.currentWeatherService.getData(this.search.city).subscribe(this.observer)
        this.searchService.search.subscribe(search => {  
            console.log(search);
            this.search = search;
            this.subscribtion.unsubscribe();
            this.subscribtion = this.currentWeatherService.getData(this.search.city).subscribe(this.observer);
        })        
    }

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe();
    }
}