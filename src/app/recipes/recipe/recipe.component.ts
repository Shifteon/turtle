import { Component, Input, OnInit } from '@angular/core';
import { Recipe, RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent  implements OnInit {
  @Input() small = false;
  @Input() index = 0;
  shrinkCssClass = false;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes()[this.index];
  }

  expand() {
    if (!this.small) return;
    this.small = false;
    this.shrinkCssClass = false;
  }

  shrink(event: any) {
    event.stopPropagation();
    this.small = true;
    this.shrinkCssClass = true;
    // setTimeout(() => {
    //   this.shrinkCssClass = false;
    // }, 2000);
  }
}
