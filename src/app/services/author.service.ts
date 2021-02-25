import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Author } from '../models/author';
import { tap } from 'rxjs/operators';


const url = 'http://fe2e1db9aadb.ngrok.io/publisher'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

 constructor(private httpClient: HttpClient) { }

 getAuthor(name:HttpParams) {
 	console.log(name)
  	return this.httpClient.get<Author[]>(url + '?author=' + name).pipe(tap(console.log));
}


  // HeadersS
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  

}
