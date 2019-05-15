import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Search } from '../search/search.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  search: Search;

  constructor(private searchService: SearchService){
    this.searchService.search.subscribe(m => this.search = m);
  }

  collapse() {    
    this.isExpanded = false;
  }

  toggle() {        
    this.isExpanded = !this.isExpanded;
  }
}
