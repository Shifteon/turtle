import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPage } from './recipes.page';
import { AddRecipeComponent } from 'src/app/recipes/add-recipe/add-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: 'add',
    component: AddRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
