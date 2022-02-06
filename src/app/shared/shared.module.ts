import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { MatCardModule } from '@angular/material/card';
import { SearchRoutingModule } from '../search/search-routing.module';



@NgModule({
  declarations: [VideoCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SearchRoutingModule,
  ],
  exports: [VideoCardComponent]
})
export class SharedModule { }
