import { Component, OnDestroy } from '@angular/core';
import { Search } from '../models/search.model';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-search',
    moduleId: module.id,
    templateUrl: 'search.component.html',
})
export class SearchComponent implements OnDestroy {    
    subscribtion: Subscription;
    search: Search = new Search();    

    constructor(private searchService: SearchService) {        
        this.subscribtion = this.searchService.search.subscribe(s => {this.search = s;});        
    }

    onClick() {
        this.search.isErrorLoading = false;        
        this.search.loading = true;
        this.search.loaded = false;
        this.searchService.changeSearch(this.search);
    }    

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe();
    }
}
