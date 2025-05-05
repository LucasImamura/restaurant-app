import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemCreatorComponent } from './item-creator/item-creator.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
/*
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
*/
  {
    path: 'create-item',
    component: ItemCreatorComponent,
    title: 'Register items'
  }
];

export default routeConfig;
