import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ],
  declarations: [RecipesPage]
})
export class RecipesModule {}
