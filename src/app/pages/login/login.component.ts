import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any = {
    "emailId": "",
    "password": ""
  }
  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {

    this.masterSrv.login(this.loginObj).subscribe((res:any)=>{
      console.log(res);
      // if(res.result) {
      //   localStorage.setItem('ticketUser',JSON.stringify(res.data));
      //   this.router.navigateByUrl('dashboard'); // auto redirecting 
      // } else {
      //   alert(res.message)
      // }
    })
  }
}