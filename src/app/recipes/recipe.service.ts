import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface Recipe {
  name: string;
  servings: string;
  prepTime: { time: number; unit: string };
  cookTime: { time: number; unit: string };
  ingredients: { ingredient: string; category: string }[];
  instructions: string[]
};

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  changed$ = new Subject<true>();
  private recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.changed$.next(true);
  }

  deleteRecipe(index: number) {
    if (this.recipes[index]) {
      this.recipes.splice(index, 1);
      this.changed$.next(true);
    }
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}