import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm: FormGroup;
  public title = 'bestshop';
  public username:any = "";
  public password:string = "";
  public errorMessage:string = "";

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService){

  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login() {
    this.errorMessage = null;
    if(!this.loginForm.valid){
      this.errorMessage = "Invalid Form.Please enter valid data!";
      return;
    }
    var data = this.loginForm.value;
    console.log(data);
    this.authenticationService.Login(data).subscribe(res => {
      if(res && res.data){
        localStorage.setItem('currentUser', JSON.stringify(res.data));
      }
      this.toastr.success("Login successfully");
    },err => {
      this.toastr.error(err);
    });
  }

}
