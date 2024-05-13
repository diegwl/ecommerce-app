import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    'path': 'products',
    component: HomeComponent,
    'title': 'Products'
  },
  {
    'path': 'products', children:[
      {
        'path': ':id',
        component: ProductComponent,
      }
    ]
  },
  {
    'path': 'search',
    component: SearchComponent,
    'title': 'Search Products'
  },
  {
    'path': 'cart',
    component: CartComponent,
    'title': 'Cart'
  },
  {
    'path': '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    'path': '**',
    component: NotFoundComponent
  }
];
