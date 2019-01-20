import { MEAT_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order} from './order.model';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    // tslint:disable-next-line:no-shadowed-variable
                    .map(order => order.id);
  }

}
