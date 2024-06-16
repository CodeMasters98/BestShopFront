import { Component, Input } from '@angular/core';
import { Product } from '../../../_models/product';
import swal from 'sweetalert2'
import { ProductService } from '../../../_services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  
  constructor(
    private toastr: ToastrService,
    private productService:ProductService){

  }

  @Input() public product: Product;
  public pic:string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  setDefaultPic() {
    this.pic = "assets/images/NoPic.png";
  }

  public deleteProduct(productId:number){
    swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        //Call Api for delete a product
        this.productService.DeleteProduct(productId).subscribe(result => {
          this.toastr.success("Product deleted successfully!");
        },err =>{
          this.toastr.error(err?.message);
        });
        
      }
    });
  }

}
