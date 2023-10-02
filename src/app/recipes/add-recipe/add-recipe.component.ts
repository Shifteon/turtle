import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent  implements OnInit {
  categories = ["dairy", "produce", "frozen", "snacks"];
  ingredients: { ingredient: string; category: string }[] = [];
  ingredientInputs = [0];
  instructionInputs = [0];
  recipe: Recipe = { name: "", servings: "", prepTime: { time: 0, unit: "hours" }, cookTime: { time: 0, unit: "hours" }, ingredients: [], instructions: [] };

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {}

  addIngredientInput() {
    this.ingredientInputs.push(0);
  }

  addInstructionInput() {
    this.instructionInputs.push(0);
  }

  removeIngredient(index: number) {
    this.ingredientInputs.splice(index, 1);
    if (this.recipe.ingredients[index]) {
      this.recipe.ingredients.splice(index, 1);
    }
  }

  removeInstruction(index: number) {
    this.instructionInputs.splice(index, 1);
    if (this.recipe.instructions[index]) {
      this.recipe.instructions.splice(index, 1);
    }
  }

  inputName({target}: any) {
    this.recipe.name = target.value;
  }

  inputServings({target}: any) {
    this.recipe.servings = target.value;
  }

  inputPrepTime({target}: any) {
    this.recipe.prepTime.time = +target.value;
  }

  inputPrepTimeUnit({target}: any) {
    this.recipe.prepTime.unit = target.value;
  }

  inputCookTime({target}: any) {
    this.recipe.cookTime.time = +target.value;
  }

  inputCookTimeUnit({target}: any) {
    this.recipe.cookTime.unit = target.value;
  }

  inputIngredient({target}: any, index: number) {
    if (this.recipe.ingredients[index]) {
      this.recipe.ingredients[index].ingredient = target.value;
      return;
    }
    this.recipe.ingredients.push({ ingredient: target.value, category: "" });
  }

  inputIngredientCategory({target}: any, index: number) {
    if (this.recipe.ingredients[index]) {
      this.recipe.ingredients[index].category = target.value;
      return;
    }
    this.recipe.ingredients.push({ ingredient: "", category: target.value });
  }

  inputInstruction({target}: any, index: number) {
    if (this.recipe.instructions[index]) {
      this.recipe.instructions[index] = target.value;
      return;
    }
    this.recipe.instructions.push(target.value);
  }

  submit() {
    console.log(this.recipe);
    this.recipeService.addRecipe(this.recipe);
    this.router.navigateByUrl("/home");
  }
}
