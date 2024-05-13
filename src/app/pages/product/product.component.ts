import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../interfaces/product-interface';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { CartInterface } from '../../interfaces/cart-interface';
import { CartProductInterface } from '../../interfaces/cart-product-interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  _productService = inject(ProductsService);
  _localStorageService = inject(LocalStorageService);
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

  addToCart() {
    let cart: CartInterface = this._localStorageService.get('cart');

    let productToAdd: CartProductInterface = {
      id: this.productData?.id!,
      title: this.productData?.title!,
      price: this.productData?.price!,
      quantity: 1,
      total: this.productData?.price!,
      brand: this.productData?.brand!,
      image: this.productData?.images[0]!
    }

    if (cart != null) {
      cart.products.push(productToAdd)
      cart.total = cart.total + productToAdd.price
      cart.totalProducts = cart.totalProducts + 1

      this._localStorageService.remove('cart')
      this._localStorageService.set('cart', cart)
    } else {
      cart = {
        id: 1,
        products: [
          productToAdd
        ],
        total: productToAdd.price,
        totalProducts: 1
      }

      this._localStorageService.set('cart', cart)
    }
  }
}
