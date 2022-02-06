import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, Observable, EMPTY } from 'rxjs';
import { VideoService } from '../services/video.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<any> {

  constructor(private _service: VideoService, private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._service.getCommentaries(route.params['id']).pipe(
      delay(1000),
      catchError(() => {
        this._router.navigate([""]);
        return EMPTY;
      })
    )
  }
}
