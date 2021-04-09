import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandOptionComponent } from './components/brand-option/brand-option.component';
import { ColorOptionComponent } from './components/color-option/color-option.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandCRUDComponent } from './components/brand-crud/brand-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    SidebarComponent,
    CarDetailComponent,
    FilterPipePipe,
    BrandOptionComponent,
    ColorOptionComponent,
    PaymentComponent,

    BrandCRUDComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
