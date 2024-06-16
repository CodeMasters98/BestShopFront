import { Component } from '@angular/core';
import { Product } from '../../../_models/product';
import { ProductService } from '../../../_services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent {
  
  public products: Product[]= [];

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.productService.GetProducts().subscribe((res: any[]) => {
      for (let index = 0; index < res.length; index++) {
        const product = new Product();
        product.Name = res[index].name;
        product.Id = res[index].id;
        product.BrandName = res[index].brandName;
        product.TotaPrice = res[index].totaPrice;
        this.products.push(product);
      }
    },err =>{
      console.log(err);
    });
    
  }

}
