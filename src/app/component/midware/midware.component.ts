import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DetailsService} from '../../service/details.service';
import {Data} from '../../models/Data'; 
import {Router} from '@angular/router';
import "../../../../../psoi-22Jan/js/proton.js" ;
 
 
import '../../../../../psoi-22Jan/js/screenfull.js';
 
import '../../../../../psoi-22Jan/js/skycons.js';
import '../../../../../psoi-22Jan/js/proton.js';
import {alerts} from '../../../assets/js/index.js';
@Component({
  selector: 'app-midware',
  templateUrl: './midware.component.html',
  styleUrls: ['./midware.component.css']
})
export class MidwareComponent implements OnInit {
 rid:string;
 data:Data[];

 message:string;
  constructor(private detailservice:DetailsService,private router:Router) {
    alerts();
   }

  ngOnInit() {
    this.detailservice.currentMessage.subscribe(message=>{
      this.message=message;
      console.log(this.message);
    })
    if(localStorage==null){
      this.router.navigate(['/']);
    }
  }
  @Output() messageEvent = new EventEmitter<string>();
  onSubmit(){
  this.detailservice.getJson(this.rid).subscribe(response => {
   // alert(response);
   if(response==null){
     alert("No User with this data");
   }
   else{
    this.data=response
    console.log(this.data);
   }
  })
  //this.messageEvent.emit("s");
 
  this.detailservice.changeMessage(this.rid);
//
  }
}
