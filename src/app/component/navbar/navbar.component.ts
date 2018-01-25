import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DetailsService } from '../../service/details.service'
import {Data} from '../../models/Data'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
rid:any;
data:Data[];
total:number;
  constructor(private router:Router,private detailservice:DetailsService) { }

  ngOnInit() {
  }
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
}
