import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRoutingModule } from './product-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsTableComponent } from './products-table/products-table.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule
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
