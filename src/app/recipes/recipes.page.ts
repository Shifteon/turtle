import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Recipe, RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss']
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private destroy$ = new Subject<true>();

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.changed$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.recipes = this.recipeService.getRecipes();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  goToAddRecipe() {
    this.router.navigateByUrl("home/add");
  }
}
