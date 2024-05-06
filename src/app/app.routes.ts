import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    'path': 'products',
    component: HomeComponent,
    'title': 'Products'
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
