import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MidwareComponent } from './component/midware/midware.component';
 
import { DetailsService } from './service/details.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from  'ng2-toastr/ng2-toastr';
import { ToastrModule } from 'ngx-toastr';
import { FilternullPipe } from './filternull.pipe';
import { AuthService } from './service/auth.service';
const route:Routes=[
  {path:'',component:LoginComponent},
  {path:'user',component:DashboardComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    MidwareComponent,
    FilternullPipe
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [DetailsService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
