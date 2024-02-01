import { Component } from '@angular/core';
import { Food } from '../../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
food!: Food;

  constructor(activatedRoute: ActivatedRoute, foodService:FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['foodId']) {
        this.food = foodService.getFoodById(params['foodId'])
      }
    })
    
  }


  addToCart(food: Food) {
    this.cartService.addToCart(food);
    this.router.navigateByUrl('/cart-page')
  }
}
