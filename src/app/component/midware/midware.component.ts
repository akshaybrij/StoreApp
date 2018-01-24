import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DetailsService} from '../../service/details.service';
import {Data} from '../../models/Data'; 
import {Router} from '@angular/router';
import '../../../../../psoi-22Jan/js/proton.js';
@Component({
  selector: 'app-midware',
  templateUrl: './midware.component.html',
  styleUrls: ['./midware.component.css']
})
export class MidwareComponent implements OnInit {
 rid:string;
 data:Data[];
 styleData:any;
 message:string;
  constructor(private detailservice:DetailsService,private router:Router) {
 
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
  this.detailservice.getJson(this.rid).subscribe(response => {
   // alert(response);
   if(response==null){
     alert("No User with this data");
     //document.getElementsByClassName('main-grid')[0].className="hidden";
   }
   else{
    this.data=response
    console.log(this.data);
   }
  })
  //this.messageEvent.emit("s");
 
  this.detailservice.changeMessage(this.rid);
  }
  Logmeout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

