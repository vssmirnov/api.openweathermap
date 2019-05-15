import { Component, OnDestroy } from '@angular/core';
import { SearchService } from '../search/search.service';
import { CurrentWeatherService } from './currentWeather.service';
import { Search } from '../search/search.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-current-weather',
    moduleId: module.id,
    templateUrl: 'currentWeather.component.html'
})
export class CurrentWeatherComponent implements OnDestroy {
    currentWeather: CurrentWeather;
    subscribtion: Subscription;
    search: Search;

    constructor(private currentWeatherService: CurrentWeatherService, private searchService: SearchService) {
        this.searchService.display(true);
        this.search = searchService.getCurrentSearch();        
        this.subscribtion = this.currentWeatherService.getData(this.search.city).subscribe(weather => this.currentWeather = weather)
        this.searchService.search.subscribe(search => {  
            this.search = search;
            this.subscribtion.unsubscribe();
            this.subscribtion = this.currentWeatherService.getData(this.search.city).subscribe(weather => this.currentWeather = weather);
        })        
    }

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe();
    }
}