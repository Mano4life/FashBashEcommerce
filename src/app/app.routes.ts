import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { isLoggedInGuard } from './guard/is-logged-in.guard';

export const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  title: 'Ecommerce - Home'
},
{
  path: 'register',
  component: RegisterComponent,
  title: 'Ecommerce - Register',
},
{
  path: 'login',
  component: LoginComponent,
  title: 'Ecommerce - login',
},
{
  path: 'cart',
  component: CartComponent,
  title: 'Ecommerce - cart',
  canActivate: [isLoggedInGuard]
},
{
  path: 'view/:id',
  component: ViewComponent,
  title: 'Ecommerce - Product'
},
{
  path: '**',
  component: NotFoundComponent,
  title: 'not found'
}


];
