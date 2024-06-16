import { Component, Input } from '@angular/core';
import { ProductService } from '../../../_services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  
  public ProductForm: FormGroup;
  public title = 'bestshop';
  public username:any = "";
  public password:string = "";
  public errorMessage:string = "";

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService){

  }

  ngOnInit(){
    this.ProductForm = this.formBuilder.group({
      name: [''],
      price: [0, Validators.required],
      brandName: [''],
    });
  }

  Add() {
    this.errorMessage = null;
    if(!this.ProductForm.valid){
      this.errorMessage = "Invalid Form.Please enter valid data!";
      return;
    }
    var data = this.ProductForm.value;
    console.log(data);
    this.productService.AddProduct(data).subscribe(res => {
      this.toastr.success("Product added successfuly!");
      this.router.navigate(['/Product']);
    },err => {
      this.toastr.error(err?.message);
    });
  }

}
