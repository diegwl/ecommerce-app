import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';

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
    component: HomeComponent,
    'title': 'Search Products'
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
