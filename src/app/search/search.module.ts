import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { MaterialModule } from '../material/material.module';
import { SafeURLPipe } from './pipes/safe-url.pipe';




@NgModule({
  declarations: [
    SearchResultPageComponent,
    VideoCardComponent,
    SafeURLPipe,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
  ]
})
export class SearchModule { }
