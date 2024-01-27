import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getAll(): Food[] {
    return sample_foods
  }

  getAllFoodsBySearchTerm(search: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id === foodId) ?? new Food();
  }

  getAllFoodByAllTag(): Tag[] {
    return sample_tags
  }
}
