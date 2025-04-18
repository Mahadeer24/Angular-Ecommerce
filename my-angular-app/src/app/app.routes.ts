import { Routes } from '@angular/router';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';
export const routes: Routes = [
    {path:'',component:HomePageComponentComponent},
    {path:'cart', component: AddToCartComponent}
];
