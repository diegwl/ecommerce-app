import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  con?: string;

  getProducts() {
    this.con = 'https://dummyjson.com/products';

    return this.http.get(this.con).pipe(
      map((val: any) => {
        return {
          products: val.products
        };
      })
    )
  }

  getProduct(id: number) {
    this.con = `https://dummyjson.com/products/${id}`

    return this.http.get(this.con).pipe(
      map((val: any) => {
        return {
          ...val
        };
      })
    )
  }

  searchProducts(text: string) {
    this.con = `https://dummyjson.com/products/search?q=${text}`

    return this.http.get(this.con).pipe(
      map((val: any) => {
        return {
          products: val.products
        };
      })
    )
  }
}
