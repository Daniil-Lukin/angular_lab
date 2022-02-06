import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, delay, catchError, EMPTY, tap } from 'rxjs';
import { VideoService } from '../services/video.service';

@Injectable({
  providedIn: 'root'
})
export class RelatedVideosResolver implements Resolve<any> {

  constructor(private _srevice: VideoService, private _router: Router) { };

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._srevice.getRelatedVideos(route.params['id']).pipe(
      delay(1000),
      tap(),
      catchError(() => {
        this._router.navigate([""]);
        return EMPTY;
      })
    )
  }
}
