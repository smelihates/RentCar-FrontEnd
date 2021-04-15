import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandComponent } from './components/brand/brand.component';
import { CarCrudComponent } from './components/car-crud/car-crud.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: 'brand/list', component: BrandComponent },
  { path: 'color/list', component: ColorComponent },
  { path: 'customer/list', component: CustomerComponent },
  { path: 'car/list', component: CarComponent },
  { path: 'car/details/:carId', component: CarDetailComponent },
  { path: 'rental/list', component: RentalComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },

  { path: 'car/edit', component: CarCrudComponent },
  { path: 'car/edit/:carId', component: CarCrudComponent },
  { path: 'car/payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
