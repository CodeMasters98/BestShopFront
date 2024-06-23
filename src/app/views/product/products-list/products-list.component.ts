import { Component } from '@angular/core';
import { Product } from '../../../_models/product';
import { ProductService } from '../../../_services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
  public products: Product[]= [];
  public loading:boolean = false;

  public smallScreen:boolean;

  //Logic -> ts
  //View -> html css

  constructor(
    private router: Router,
    private productService:ProductService,
    private breakpointObserver: BreakpointObserver,
    private toastr: ToastrService){

      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small
      ]).subscribe(result => {
        this.smallScreen = result.matches;
      });

    }

  ngOnInit(){
    this.GetProducts();

    if(this.smallScreen){
      //Api call
      //calculate
      //transfer
    }
  }

  private GetProducts() {
    this.products = [];
    this.loading = true;
    this.productService.GetProducts().subscribe((res: any[]) => {
      for (let index = 0; index < res.length; index++) {
        const product = new Product();
        product.Id = res[index].id;
        product.Name = res[index].name;
        product.BrandName = res[index].brandName;
        product.TotaPrice = res[index].totaPrice;
        this.products.push(product);
      }
      this.loading = false;
    },err =>{
      this.toastr.error('Error', err.message);
      this.loading = false;
    });
  }

  public RouteToAddProduct(){
    this.router.navigate(['/Product/Add']);
  }

  public deleteRequest(event){
    this.GetProducts();
  }

}
