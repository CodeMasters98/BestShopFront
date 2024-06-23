import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  public currentUser:any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService){
    this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit(){
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['/']);
    this.toastr.success("Logout successfully")
  }

}
