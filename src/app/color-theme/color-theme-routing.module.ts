import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorThemeComponent } from 'src/app/color-theme/color-theme.component';

const routes: Routes = [
  {
    path: '',
    component: ColorThemeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorThemeRoutingModule {}
