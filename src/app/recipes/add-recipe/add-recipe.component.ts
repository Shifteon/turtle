import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent  implements OnInit {
  ingredientInputs = [0];
  instructionInputs = [0];

  constructor() { }

  ngOnInit() {}

  addIngredientInput() {
    this.ingredientInputs.push(0);
  }

  addInstructionInput() {
    this.instructionInputs.push(0);
  }

  removeIngredient(index: number) {
    this.ingredientInputs.splice(index, 1);
  }

  removeInstruction(index: number) {
    this.instructionInputs.splice(index, 1);
  }
}
