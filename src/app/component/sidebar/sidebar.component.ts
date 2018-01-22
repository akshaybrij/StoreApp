import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../../service/details.service'; 
import { HttpClient } from '@angular/common/http';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import {Data} from  '../../models/Data';
import { FilternullPipe } from '../../filternull.pipe';
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  data:any=[];
  rid:any;
  req:any;
  increment:any;
  total:number;
  constructor(private detailservice:DetailsService,private http:HttpClient,private toastr: ToastrService) {
   }
message:any;

  ngOnInit() {
    this.detailservice.currentMessage.subscribe(message=>{
      this.message=message;
      console.log(this.message+"msg");
      this.detailservice.getJson(this.message).subscribe(res=>{
        this.data=res
     //   alert(this.data + "dt");
          //  alert(this.data.member_id)
      })
       
    })
    
   
  }
  onSubmit(){
    this.rid=this.data.member_id;
   // console.log(this.rid);
    this.total=parseInt(this.increment) + parseInt(this.data.member_balance);
    return this.http.get('http://localhost/dsoi_new/api/mem_bal?rid='+this.rid+"&bal="+this.increment).subscribe(response=>{
   

  //    alert(this.data);
    })
   
  }
  

 
}
