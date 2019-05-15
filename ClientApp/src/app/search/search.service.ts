import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Search } from "./search.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SearchService {            
    private currentSearch: Search;
    private subject = new Subject<Search>();

    constructor(){        
        this.currentSearch = new Search("", false);
        this.search.subscribe(s =>  this.currentSearch = s);
    }

    changeSearch(search: Search) {
        this.subject.next(search);
    }

    display(isVisiblie: boolean){        
        this.currentSearch.visible = isVisiblie;
        this.changeSearch(this.currentSearch);
    }

    get search(): Observable<Search> {
        return this.subject;
    }
}