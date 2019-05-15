import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private searchService: SearchService){
    this.searchService.display(false);
  }
}
