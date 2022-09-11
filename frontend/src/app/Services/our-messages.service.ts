import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OurMessagesService {

  private _getmsgUrl = "http://localhost:3000/api/getMessages";
  private _posttmsgUrl = "http://localhost:3000/api/sendMsg";

  constructor(private http:HttpClient) { }

  sendMessage(Dmessage:any){
    return this.http.post<any>(this._posttmsgUrl, Dmessage)
            .pipe(catchError(this.errorHandler))
  }

  getAllMessages(){
    return this.http.get<any>(this._getmsgUrl)
            .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
