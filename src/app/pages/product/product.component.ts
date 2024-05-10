import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../interfaces/product-interface';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  _productService = inject(ProductsService)
  _route = inject(ActivatedRoute);

  productId? = this._route.snapshot.paramMap.get('id');

  productData?: ProductInterface
  productDataOb?: Observable<ProductInterface>

  ngOnInit(): void {
    this._productService.getProduct(Number.parseInt(this.productId!)).subscribe({
      next: (data) => {
        this.productData = data as ProductInterface
      }, complete: () => {
        console.log(this.productData)
      }
    })
  }

}
