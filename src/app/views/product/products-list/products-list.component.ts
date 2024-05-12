import { Component } from '@angular/core';
import { Product } from '../../../_models/product';
import { ProductService } from '../../../_services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
  public products: Product[]= [];

  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.productService.GetProducts().subscribe(res => {
      // if(res){

      // }
    },err =>{});
    // for (let index = 0; index < 10; index++) {
    //   const product = new Product();
    //   product.Name = `Name ${index + 1}`
    //   product.BrandName = `BrandName ${index + 1}`
    //   product.TotaPrice = (index + 1) * 5000
    //   this.products.push(product);
    // }
  }

}
