import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-lab';
  
  searchQuery: string = '';
  public iconCode: string = 'view_list';
  private _isList: boolean = true;

  constructor(private _router: Router) {};

  onSearchClick(): void{
    this._router.navigate(['/search'], {queryParams:{query: this.searchQuery}, queryParamsHandling: 'merge'})
  }

  onViewClick(): void{
    this.iconCode = this._isList ? 'view_module' : 'view_list';
    this._isList = !this._isList; 
    this._router.navigate(['/search'], {queryParams:{view: this._isList}, queryParamsHandling: 'merge'})
  }

}