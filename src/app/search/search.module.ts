import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { VideoCardComponent } from '../shared/components/video-card/video-card.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchResultPageComponent,

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class SearchModule { }
