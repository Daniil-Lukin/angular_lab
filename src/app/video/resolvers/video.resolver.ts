import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { IVideo } from '../interfaces/IVideo';
import { VideoService } from '../services/video.service';

@Injectable({
  providedIn: 'root'
})
export class VideoResolver implements Resolve<IVideo> {

  constructor(private _router: Router, private _videoService: VideoService){ }

  resolve(route: ActivatedRouteSnapshot): Observable<IVideo> {
    return this._videoService.getVideoInfo(route.params['id']).pipe(
      delay(1000),
      catchError(() => {
        this._router.navigate([""]);
        return EMPTY;
      })
    )
  }
}
