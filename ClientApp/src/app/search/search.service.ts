import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Search } from "./search.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class SearchService implements OnDestroy {        
    private currentSearch: Search;
    subscribtion: Subscription;
    private subject = new Subject<Search>();

    constructor(){        
        this.currentSearch = new Search("", false);
        this.subscribtion = this.search.subscribe(s => {this.currentSearch = s;});        
    }

    changeSearch(search: Search) {
        this.subject.next(search);
    }

    display(isVisiblie: boolean){        
        this.currentSearch.visible = isVisiblie;
        this.changeSearch(this.currentSearch);
    }

    getCurrentSearch(): Search {
        return this.currentSearch;
    }

    get search(): Observable<Search> {
        return this.subject;
    }

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe()
    }        
}