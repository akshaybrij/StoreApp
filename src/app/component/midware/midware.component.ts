import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DetailsService} from '../../service/details.service';
import {Data} from '../../models/Data'; 
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import '../../../../../psoi-22Jan/js/proton.js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-midware',
  templateUrl: './midware.component.html',
  styleUrls: ['./midware.component.css']
})
export class MidwareComponent implements OnInit {
 rid:number;
 total:any;
 data:Data[];
 styleData:any;
 balance:any; 
 message:string;
  constructor(private detailservice:DetailsService,private router:Router,private toastrService:ToastrService,
  private http:HttpClient) {
 
   }

  ngOnInit() {
    this.detailservice.currentMessage.subscribe(message=>{
      this.message=message;
      console.log(this.message);
    })
    if(!localStorage.getItem('tokens')){
     
      this.router.navigate(['/']);
    }
  }
  @Output() messageEvent = new EventEmitter<string>();
  Increment(){
  this.http.get("http://localhost/dsoi_new/api/mem_bal?rid="+this.rid+"&bal="+this.balance).subscribe(respond=>{
    this.toastrService.success('Success', '', {
      timeOut: 3000
    });
  });
this.total=parseInt(this.total)+parseInt(this.balance)
var resetForm = <HTMLFormElement>document.getElementById('IncrementForm');
resetForm.reset();

  //document.getElementById('IncrementForm').reset();
  }
}

