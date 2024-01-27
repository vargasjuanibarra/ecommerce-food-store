import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getAllFoods(): Food[] {
    return sample_foods
  }

  getAllFoodsBySearchTerm(search: string) {
    return this.getAllFoods().filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
  }

  getFoodById(foodId: string): Food {
    return this.getAllFoods().find(food => food.id === foodId) ?? new Food();
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getFoodsByTag(tag: string): Food[] {
    if(tag === 'All') {
      return this.getAllFoods()
    } else {
      return this.getAllFoods().filter(food => food.tags?.includes(tag))
    }
  }
}
