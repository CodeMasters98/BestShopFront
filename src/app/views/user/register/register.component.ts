import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public loginForm: FormGroup;
  public title = 'bestshop';
  public username:any = "";
  public password:string = "";
  public errorMessage:string = "";

  constructor(private formBuilder: FormBuilder,
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
      debugger;//
    },err => {
      debugger;//
    });
  }

}
