import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './component/video-page/video-page.component';
import { CommentarySectionComponent } from './component/commentary-section/commentary-section.component';
import { VideoRoutingModule } from './video-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SafeURLPipe } from './pipes/safe-url.pipe';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { DecimalPipe } from './pipes/decimal.pipe';




@NgModule({
  declarations: [VideoPageComponent, CommentarySectionComponent, SafeURLPipe, DecimalPipe,],
  imports: [
    CommonModule,
    VideoRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
  ]
})
export class VideoModule { }
