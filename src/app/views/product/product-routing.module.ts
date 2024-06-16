import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsTableComponent } from "./products-table/products-table.component";
import { ProductPageComponent } from "./product-page/product-page.component";

const routes: Routes = [
    {
      path: '',
      component: ProductsListComponent,
      data: {
        title: 'ورود'
      }
    },
    {
      path: ':id',
      component: ProductPageComponent,
      data: {
        title: 'ورود'
      }
    },
    {
      path: 'Table',
      component: ProductsTableComponent,
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