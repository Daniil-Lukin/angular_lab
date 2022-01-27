import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatWith, map, switchMap } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.sass']
})
export class SearchResultPageComponent implements OnInit{

  private searchRequest: string = ' ';
  public videoList: any;
  public isList: boolean = true;

  constructor(private _searchService: SearchService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.isList);
    console.log('text');
    this._route.queryParams
      .pipe(
        switchMap(params => this._searchService.getVideos(params['query']))
        )//TODO: операторы RxJs, Filter, мб потом доделать
      .subscribe(response => {
        this.videoList = response;
        this.searchRequest = this._route.snapshot.queryParams['query'];
        this.isList = this._route.snapshot.queryParams['view'];
      });

     console.log(this.isList);
  }
  
}
