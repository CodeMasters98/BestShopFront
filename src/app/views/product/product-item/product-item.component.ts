import { Component, Input } from '@angular/core';
import { Product } from '../../../_models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  
  @Input() public product: Product;

}
