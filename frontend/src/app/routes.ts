import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemCreatorComponent } from './item-creator/item-creator.component';
import { BurgerCreatorComponent } from './burger-creator/burger-creator.component';
import { OrderCreatorComponent } from './order-creator/order-creator.component';

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
  },
  {
    path: 'create-burger',
    component: BurgerCreatorComponent,
    title: 'Register items'
  },
  {
    path: 'create-order',
    component: OrderCreatorComponent,
    title: 'Register items'
  },
];

export default routeConfig;
