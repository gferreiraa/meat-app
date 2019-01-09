import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.services';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor( private restauranstsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranstsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
