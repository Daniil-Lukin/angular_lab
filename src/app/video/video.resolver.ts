import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { VideoService } from './services/video.service';

@Injectable({
  providedIn: 'root'
})
export class VideoResolver implements Resolve<any> {

  constructor(private _router: Router, private _videoService: VideoService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._videoService.getVideoInfo(route.params?.['videoId']).pipe(
      catchError(() => {
        this._router.navigate([""]);
        return EMPTY;
      })
    )
  }
}
