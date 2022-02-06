import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search/services/search.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-lab';
  
  searchQuery: string = ' ';
  public iconCode: string = 'view_list';
  private _isList: boolean = true;

  constructor(private _router: Router, private _searchService: SearchService) {};

  onSearchClick(): void{
    this._router.navigate(['/search'], {queryParams:{query: this.searchQuery}})
  }

  onViewClick(): void{
    this.iconCode = this._isList ? 'view_module' : 'view_list';
    this._isList = !this._isList; 
    this._searchService.changeState(this._isList);
  }

  onHomeClick(): void{
    this._router.navigate(['/search'], {queryParams:{query: this.searchQuery}});
  }

}