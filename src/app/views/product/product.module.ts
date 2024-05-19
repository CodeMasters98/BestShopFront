import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRoutingModule } from './product-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    //ProductItemComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class ProductModule { }
