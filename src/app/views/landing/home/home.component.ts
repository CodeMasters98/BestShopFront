import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authenticationService: AuthenticationService){
    debugger;
  }

  ngOnInit(){

  }

}
