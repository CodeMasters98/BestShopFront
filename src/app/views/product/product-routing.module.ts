import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";

const routes: Routes = [
    {
      path: '',
      component: ProductsListComponent,
      data: {
        title: 'ورود'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class ProductRoutingModule {}