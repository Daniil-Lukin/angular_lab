import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';



const routes: Routes = [
  {
    path:'',
    component: SearchResultPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SearchRoutingModule { }
