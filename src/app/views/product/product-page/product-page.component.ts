import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {  BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  
  public productId:number;
  public smallScreen: boolean;

  @ViewChild('FirstLogin', { static: true }) FirstLogin!: TemplateRef<any>;
  
  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private router: Router){
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.productId = +params['id'];
        
        //Get Product From Backnend
      }
    });

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => { this.smallScreen = result.matches;});

  }

  ngOnInit(){
    this.dialog.open(this.FirstLogin);
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
