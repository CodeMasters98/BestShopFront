import { Component } from '@angular/core';
import { Product } from './_models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'bestshop';
  public username:any = "";
  public password:string = "";
  public product:Product | null = null;
  public products:Product[] = [];

  //Logic
  //One Way Binding
  //Two way binding

  AddProduct(product:Product){
  }

  Login() {
  }

}
