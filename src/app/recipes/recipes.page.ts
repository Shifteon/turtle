import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss']
})
export class RecipesPage {

  constructor(private router: Router) {}

  goToAddRecipe() {
    this.router.navigateByUrl("home/add");
  }
}
