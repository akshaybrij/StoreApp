import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Data} from '../models/Data';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DetailsService {
  dya:any=[];
  rid:any;
  private messageSource=new BehaviorSubject<string>(" ");
  currentMessage=this.messageSource.asObservable();
  constructor(public http:HttpClient) { }
  getJson(rid) :Observable<Data[]>{
    return this.http.get<Data[]>('http://localhost/dsoi_new/api/mem_get?rid='+rid) 
   
  }
  changeMessage(message:any){
    this.messageSource.next(mes00sage);
  }
  getrid(){
    return this.rid;
  }
}
