import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/search/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public searchQuery: string = ' ';
  public iconCode: string = 'view_list';
  private _isList: boolean = true;

  constructor(private _router: Router, private _searchService: SearchService) {};

  ngOnInit(): void {
    
  }


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
