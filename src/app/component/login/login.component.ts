import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
username:string;
password:string;
tokens:any;
  constructor(public http:HttpClient,private authservice:AuthService,
  private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    
  }
  OnSubmit(){
   //this.authservice.login(this.username,this.password).subscribe(response=>{
  
     this.http.get("http://localhost/dsoi_new/api/login?username="+this.username+"&password="+this.password).subscribe(response=>{
   if(response == "Invalid user"){
       this.toastr.error('Wrong Username or Password', '', {
        timeOut: 3000,
      });
      
     }
     else{
       console.log(response);
       this.tokens=JSON.stringify(response);
       localStorage.setItem('tokens',this.tokens);
   //    alert(localStorage.getItem('tokens'));
      this.router.navigate(['/user']);
     }
   })
 
  }
}
