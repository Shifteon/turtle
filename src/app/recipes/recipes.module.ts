import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from 'src/app/recipes/recipe/recipe.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddRecipeComponent } from 'src/app/recipes/add-recipe/add-recipe.component';

@NgModule({
  imports: [
    ComponentsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesRoutingModule,
  ],
  declarations: [RecipesPage, RecipeComponent, AddRecipeComponent]
})
export class RecipesModule {}
