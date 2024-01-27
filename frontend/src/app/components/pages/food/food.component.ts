import { Component } from '@angular/core';
import { Food } from '../../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
food!: Food;

  constructor(activatedRoute: ActivatedRoute, foodService:FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['foodId']) {
        this.food = foodService.getFoodById(params['foodId'])
      }
    })
  }
}
