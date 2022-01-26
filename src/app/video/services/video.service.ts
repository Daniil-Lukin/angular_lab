import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _APIKEY: string = 'AIzaSyDw1gTIXCAKrLQSMj8HdazRLnOIVsuloqE';
  constructor(private _http: HttpClient) { }


  public getVideoInfo(videoId: string): Observable<any>{

    const URL: string = `https://youtube.googleapis.com/youtube/v3/videos?part=player%2Csnippet&id=${videoId}&key=${this._APIKEY}}`;
    

    return this._http.get<any>(URL).pipe(
      tap(console.log),
      map(response => response.items)
    )
  }

  // public getComments(id: string): Observable<any>{
  //  как получить id коммента?
  //   const URL: string = ``
  // }
}
