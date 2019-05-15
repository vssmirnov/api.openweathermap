import { Component } from '@angular/core';
import { Search } from './search.model';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    moduleId: module.id,
    templateUrl: 'search.component.html',
})
export class SearchComponent {
    search: Search;    

    constructor(private searchService: SearchService) {        
        this.searchService.search.subscribe(s => {this.search = s;});        
    }

    onClick() {        
        this.searchService.changeSearch(this.search);
    }    
}
