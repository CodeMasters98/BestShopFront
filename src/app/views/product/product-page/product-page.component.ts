import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {  BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ProductService } from '../../../_services/product.service';
import { Product } from '../../../_models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  
  public productId:number;
  public smallScreen: boolean;
  public product: Product;

  @ViewChild('FirstLogin', { static: true }) FirstLogin!: TemplateRef<any>;
  
  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private productService:ProductService,
    private breakpointObserver: BreakpointObserver,
    private router: Router){
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.productId = +params['id'];
        this.GetProductById(this.productId);
        //Get Product From Backnend
      }
    });

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => { this.smallScreen = result.matches;});

  }

  ngOnInit(){
    //this.dialog.open(this.FirstLogin);
  }

  public GetProductById(id:number){
    this.productService.GetProduct(id).subscribe(result => {
      var product = new Product();
      product.BrandName = result.brandName;
      product.Name = result.name;
      product.TotaPrice = result.price;
      this.product = product;
    },err => {
      this.toastr.error(err?.message);
    });
  }

  GoToLoginPage() {
    this.dialog.closeAll();
    if (window && window.location) {
      this.router.navigate(['/auth/login'], {
        queryParams: { redirect_uri: window.location.pathname },
        queryParamsHandling: 'merge',
      });

    }
  }

}
