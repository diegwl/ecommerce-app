import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AllProductsInterface } from '../../interfaces/all-products-interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  _productService = inject(ProductsService)
  _fb = inject(FormBuilder)

  productsData?: AllProductsInterface
  poductsDataOb?: Observable<AllProductsInterface>

  searchData = this._fb.group({
    text: ["", Validators.required]
  })

  ngOnSearch(): void {
    if (this.searchData.controls.text.valid) {
      this.poductsDataOb = this._productService.searchProducts(this.searchData.controls.text.value!);

      this._productService.searchProducts(this.searchData.controls.text.value!).subscribe({
        next: (data) => {
          this.productsData = data as AllProductsInterface
        }, complete: () => {
          console.log(this.productsData)
        }
      })
    }
  }
}
