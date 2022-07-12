import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/search/services/search.service';
import * as cursedWords from 'src/additional/banwords.json';
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
  public _cursedWords = cursedWords;
  @ViewChild(SearchContainerComponent) child! : SearchContainerComponent;

  constructor(private _router: Router, private _searchService: SearchService) {};

  ngOnInit(): void {

  }


  onSearchClick(): void{
    if(this.checkProfanity() && this.checkDublicateReq()){
      this._router.navigate(['/search'], {queryParams: {query: this.searchQuery}})
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

  checkProfanity(): boolean{
    let regularExpr = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s\d]/g;

    for(let profanity of this._cursedWords.banners){
      if(this.searchQuery.split(regularExpr).join('').toLowerCase().includes(profanity)){
        return false;
      }
    }
    return true;
  }

  checkDublicateReq(): boolean{
    if(this.child.queryArray.includes(this.searchQuery)){
      return false;
    }
    return true;
  }

}
