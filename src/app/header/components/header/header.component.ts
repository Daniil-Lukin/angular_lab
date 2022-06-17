import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/search/services/search.service';
import * as banhammer from 'src/additional/banwords.json';
import { SearchContainerComponent } from '../search-container/search-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public searchQuery: string = ' ';
  public iconCode: string = 'view_list';
  private _isList: boolean = true;
  public displayQueries: boolean = false;
  private _banhammer: any = banhammer;
  @ViewChild(SearchContainerComponent) child! : SearchContainerComponent;

  constructor(private _router: Router, private _searchService: SearchService) {};

  ngOnInit(): void {

  }


  onSearchClick(): void{
    if(this.allowSearch()){
      this._router.navigate(['/search'], {queryParams:{query: this.searchQuery}})
      this._searchService.registrateQuery(this.searchQuery);
    }
    else{
      console.log('АСУЖДАЮ, не поддерживаю')
    }
  }

  onViewClick(): void{
    this.iconCode = this._isList ? 'view_module' : 'view_list';
    this._isList = !this._isList; 
    this._searchService.changeState(this._isList);
  }

  onHomeClick(): void{
    this._router.navigate(['/search'],{queryParams:{query: ''}});
  }

  onSearchListClick(): void{
    this.displayQueries = !this.displayQueries;
  }

  allowSearch(): boolean{
    const queryArray: string[] = this.searchQuery.split(' ');
    let firstCheck: boolean = true;
    let secondCheck: boolean = true;

    for(let word of queryArray){ 
      for(let ban of this._banhammer['banners']){
        if(word === ban){
          firstCheck = firstCheck && false;
        } else{
          firstCheck = firstCheck && true;
        }
      }
    }

      for(let query of this.child.queryArray){
        if(this.searchQuery === query){
          secondCheck = secondCheck && false;
        } else{
          secondCheck = secondCheck && true;
        }
      }

    return (firstCheck && secondCheck);
  }

}
