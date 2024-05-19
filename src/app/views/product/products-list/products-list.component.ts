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

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.productService.GetProducts().subscribe((res: any[]) => {
      for (let index = 0; index < res.length; index++) {
        const product = new Product();
        product.Name = res[index].name;
        product.BrandName = res[index].brandName;
        product.TotaPrice = res[index].totaPrice;
        this.products.push(product);
      }
    },err =>{
      console.log(err);
    });
    
  }

}
