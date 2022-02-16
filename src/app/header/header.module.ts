import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SearchContainerComponent } from './components/search-container/search-container.component';



@NgModule({
  declarations: [HeaderComponent, SearchContainerComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    
  ]
})
export class HeaderModule { }
