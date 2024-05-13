import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterLink } from '@angular/router';
import { CartInterface } from '../../interfaces/cart-interface';
import { CommonModule } from '@angular/common';
import { CartProductInterface } from '../../interfaces/cart-product-interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  _localStorageService = inject(LocalStorageService);

  cartData?: CartInterface;

  ngOnInit(): void {
    this.cartData = this._localStorageService.get('cart');

    if (this.cartData?.total == 0) {
      this._localStorageService.remove('cart')
    }
  }

  removeFromCart(product: CartProductInterface) {
    let index: number = this.cartData?.products.indexOf(product) as number;

    this.cartData!.total = this.cartData?.total! - this.cartData?.products[index].price!;
    this.cartData!.totalProducts = this.cartData?.total! - 1;

    this.cartData?.products.splice(index, 1);

    this._localStorageService.remove('cart')
    this._localStorageService.set('cart', this.cartData)

    if (this.cartData?.total == 0) {
      this._localStorageService.remove('cart')
    }
  }

}
