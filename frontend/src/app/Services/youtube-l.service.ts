import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeLService {

  private _SingleUrl = "api/newLink/";

  constructor(private http:HttpClient) { }

  getNewSingleAudioFile(newUrl_id: any): Observable<any>{
    return this.http.get<any>(this._SingleUrl+newUrl_id)
                .pipe(catchError(this.errorHandler))
  }

  updateSingleUrl(newUrl_id:any, newdata:any):Observable<any>{
    return this.http.put<any>(this._SingleUrl+newUrl_id, newdata)
                    .pipe(catchError(this.errorHandler))
  }



  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
