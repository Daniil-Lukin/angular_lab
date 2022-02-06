import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoModule } from './video/video.module';
import { VideoResolver } from './video/resolvers/video.resolver';
import { RelatedVideosResolver } from './video/resolvers/related-videos.resolver';
import { CommentsResolver } from './video/resolvers/comments.resolver';

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
    path: 'watch/:id',
    loadChildren: () => import('./video/video.module').then((m) => m.VideoModule,),
    resolve: {
      videoInfo: VideoResolver,
      relatedVideos: RelatedVideosResolver,
      comments: CommentsResolver, 
    }
  },
  {
    path: '**',
    redirectTo: 'search',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
