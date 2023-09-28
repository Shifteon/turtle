import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from 'src/app/recipes/recipe/recipe.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ],
  declarations: [RecipesPage, RecipeComponent]
})
export class RecipesModule {}
