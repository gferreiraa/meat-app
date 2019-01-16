import { OrderService } from './../order/order.service';
import { RestaurantService } from './../restaurants/restaurants.services';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [ ShoppingCartService, RestaurantService, OrderService ]
})
export class CoreModule { }
