import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoModule } from './video/video.module';
import { VideoResolver } from './video/video.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '**',
    redirectTo: 'search',
  },
  {
    path: 'watch',
    loadChildren: () => import('./video/video.module').then((m) => VideoModule,),
    resolve: {
      videoInfo: VideoResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
