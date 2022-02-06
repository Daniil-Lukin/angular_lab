import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ISearch } from 'src/app/search/interfaces/ISearch';
import { IVideo } from 'src/app/video/interfaces/IVideo'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  // private _APIKEY: string = "AIzaSyC9hgN-WLzNJITQWUwUd09pt5E3HI_aLmg";
  private _APIKEY: string = "AIzaSyAYkLTJ4H6nwpj2EhvSTpc-BP8VhhQRBk4 ";
  constructor(private _http: HttpClient) { }


  public getVideoInfo(videoId: string): Observable<IVideo>{

    const URL: string = `https://youtube.googleapis.com/youtube/v3/videos?key=${this._APIKEY}&part=statistics%2Csnippet&id=${videoId}`;
    
    return this._http.get<IVideo>(URL).pipe(
      tap(console.log),
      map(response => response.items)
    )
  }

  public getRelatedVideos(videoId: string): Observable<ISearch>{

    const URL: string = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${this._APIKEY}`;

    return this._http.get<ISearch>(URL).pipe(
      tap(console.log),
      map(response => response.items)
    )
  }

  public getCommentaries(videoId: string): Observable<any>{

    const URL: string = `https://www.googleapis.com/youtube/v3/commentThreads?key=${this._APIKEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`;

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
