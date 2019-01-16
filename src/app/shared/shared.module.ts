import { RestaurantService } from './../restaurants/restaurants.services';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';

@NgModule({
  declarations: [ InputComponent, RadioComponent, RatingComponent ],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule ],
  exports: [ InputComponent, RadioComponent, RatingComponent, FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ShoppingCartService, RestaurantService, OrderService ]
    }
  }
}
