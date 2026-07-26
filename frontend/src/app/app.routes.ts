import { Routes } from '@angular/router';

import { CreateListingPageComponent } from './pages/create-listing/create-listing';
import { ListingsPageComponent } from './pages/listings/listings';

export const routes: Routes = [
  {
    path: '',
    component: ListingsPageComponent,
  },
  {
    path: 'create',
    component: CreateListingPageComponent,
  },
];
