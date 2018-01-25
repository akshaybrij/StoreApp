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
 total:number;
 data:Data[];
 styleData:any;
 balance:number; 
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
  onSubmit(){
    //console.log(parseInt(this.rid);
  this.detailservice.getJson(this.rid).subscribe(response => {
   // alert(response);
   if(response==null){
    document.getElementsByClassName('error-message')[0].innerHTML=`<div class="alert alert-danger">
    <strong>Wrong!</strong> No User Found with this RFID.
  </div>
  `
  // document.getElementsByClassName('main-grid')[0].className="hidden";
   setTimeout(function(){
    window.location.reload()
   },3000);

   }
   else{
    this.data=response
    console.log(this.data);
    this.total=this.data.member_balance;
   }
  })
  //this.messageEvent.emit("s");
 
  this.detailservice.changeMessage(this.rid);
  }
  Logmeout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  Increment(){
  this.http.get("http://localhost/dsoi_new/api/mem_bal?rid="+this.rid+"&bal="+this.balance).subscribe(respond=>{
    this.toastrService.success('Success', '', {
      timeOut: 3000
    });
  });
this.total= this.total+ this.balance 
var resetForm = <HTMLFormElement>document.getElementById('IncrementForm');
resetForm.reset();

  //document.getElementById('IncrementForm').reset();
  }
}

