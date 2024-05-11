import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { NgModel } from '@angular/forms';

const routeConfig: Routes = [
{
  path: '',
  component: HomepageComponent,
  title: 'home'
},
{
  path: 'order',
  component: SelectPageComponent,
  title: 'order'
},
{
  path: 'checkout',
  component: CheckoutPageComponent,
  title: 'checkout'
}
];

export default routeConfig;
