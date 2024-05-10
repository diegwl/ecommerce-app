import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product-interface';
import { AllProductsInterface } from '../../interfaces/all-products-interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  _productService = inject(ProductsService)

  productsData?: AllProductsInterface
  poductsDataOb?: Observable<AllProductsInterface>

  ngOnInit(): void {
    this.poductsDataOb = this._productService.getProducts();

    this._productService.getProducts().subscribe({
      next: (data) => {
        this.productsData = data as AllProductsInterface
      }, complete: () => {
        console.log(this.productsData)
      }
    })
  }

}
