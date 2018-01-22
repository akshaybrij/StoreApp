import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import {Data} from '../models/Data';
import 'rxjs/add/operator/map';
const httpsoption={
  headers:new HttpHeaders({'Content-Type':'multipart/form-data'})
}
@Injectable()
export class AuthService {
  public token:string;
  constructor(private http:HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

   login(username: string, password: string):Observable<boolean> {

    return this.http.post('http://localhost/dsoi_new/api/login', JSON.stringify({ username: username, password: password }),httpsoption)
    .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

            // return true to indicate successful login
            return true;
        } else {
            // return false to indicate failed login
            return false;
        }
    });
        
}
}
