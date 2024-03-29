import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, tap, catchError, throwError, Subject } from 'rxjs';
import { ISearch } from '../interfaces/ISearch';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _URL: string = '';
  private _isListSource = new Subject<boolean>();
  private _querySource = new Subject<string>();
  public isList$ = this._isListSource.asObservable();
  public query$ = this._querySource.asObservable();

  constructor(private _http: HttpClient) { }

  public getVideos(query: string = ''): Observable<any> {
    this.setURl(query)
    return this._http.get<any[]>(this._URL).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(response => response.items)
    )
  }

  public changeState(state: boolean): void{
    this._isListSource.next(!state);
    console.log(state);
  }

  public registrateQuery(query: string): void{
    this._querySource.next(query);
  }
    
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

  public getURL(): string{
    return this._URL
  }

  private setURl(query: string = '', amountOfVideos: number = 16): void{
    const APIKEY = "AIzaSyDw1gTIXCAKrLQSMj8HdazRLnOIVsuloqE";
    // const APIKEY: string = "AIzaSyAYkLTJ4H6nwpj2EhvSTpc-BP8VhhQRBk4 "; 
    this._URL = `https://youtube.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=${amountOfVideos}&q=${query}`;
  }
    
}
