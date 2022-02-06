import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoPageComponent } from './component/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: VideoPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
