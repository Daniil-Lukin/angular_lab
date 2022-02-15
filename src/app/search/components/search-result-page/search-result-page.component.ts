import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { mapTo, Observable, switchMap, filter, merge } from 'rxjs';
import { ISearch } from '../../interfaces/ISearch';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.sass']
})
export class SearchResultPageComponent implements OnInit{

  private _showLoader$!: Observable<boolean>;
  private _hideLoader$!: Observable<boolean>;
  private searchRequest: string = ' ';
  public isLoading$!: Observable<boolean>;
  public videoList!: any;
  public isList: boolean = true;

  constructor(private _searchService: SearchService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._getSearchData();
    this._getLayoutChanges();
    this._setLoader();
  }
  
  private _getSearchData() {
    this._route.queryParams
      .pipe(
        switchMap((params: Params) => this._searchService.getVideos(params['query']))
      )
      .subscribe(response => {
        this.videoList = response;
        this.searchRequest = this._route.snapshot.queryParams['query'];
      });
  }

  private _getLayoutChanges() {
    this._searchService.isList$.subscribe(view => this.isList = view );
  }

  private _setLoader() {
    this._showLoader$ = this._router.events.pipe( 
      filter(e => e instanceof ResolveStart), 
      mapTo(true)
    );

    this._hideLoader$ = this._router.events.pipe( 
      filter(e => e instanceof ResolveEnd), 
      mapTo(false)
    );

    this.isLoading$ = merge(this._showLoader$, this._hideLoader$);
  }
}
