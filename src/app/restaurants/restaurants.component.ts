import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurants.services';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor( private restaurantsService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants();
  }

}
