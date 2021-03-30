import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: 'brand/list', component: BrandComponent },
  { path: 'color/list', component: ColorComponent },
  { path: 'customer/list', component: CustomerComponent },
  { path: 'car/list', component: CarComponent },
  { path: 'rental/list', component: RentalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
