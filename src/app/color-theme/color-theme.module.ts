import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorThemeComponent } from 'src/app/color-theme/color-theme.component';
import { ColorThemeRoutingModule } from 'src/app/color-theme/color-theme-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ColorThemeRoutingModule
  ],
  declarations: [ColorThemeComponent]
})
export class ColorThemeModule {}
