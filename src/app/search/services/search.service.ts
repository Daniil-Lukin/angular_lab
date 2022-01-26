import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, tap, catchError, throwError, Subject } from 'rxjs';
import { SearchRoutingModule } from '../search-routing.module';
import { SearchResultPageComponent } from '../components/search-result-page/search-result-page.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _isListSource = new Subject<boolean>();
  public isList$ = this._isListSource.asObservable();

  constructor(private _http: HttpClient) { }

  public getVideos(query: string): Observable<any> {

    const APIKEY = "AIzaSyDw1gTIXCAKrLQSMj8HdazRLnOIVsuloqE"
    const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=2&q=${query}`;
    
    console.log(query);
    return this._http.get<any>(URL).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(response => response.items)
    )
  }
    //TODO: разобраться с observable 
    //https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
    //https://rxjs.dev/guide/observable
    //Parent and children communicate using a service
  private handleError(errorMessage : HttpErrorResponse){
    let errorMessageText : string = "";
    if(errorMessage.error instanceof ErrorEvent){
      errorMessageText = `An error occurred: ${errorMessage.error.message}`;
    } else{
      errorMessageText = `Server returned code: ${errorMessage.status} and the message is ${errorMessage.error.message}`; 
    }
    console.log(errorMessage.message);
    return throwError(errorMessageText);
  }
    
}
