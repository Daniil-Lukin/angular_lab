import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './component/video-page/video-page.component';
import { CommentarySectionComponent } from './component/commentary-section/commentary-section.component';




@NgModule({
  declarations: [VideoPageComponent, CommentarySectionComponent],
  imports: [
    CommonModule,
    
  ]
})
export class VideoModule { }
