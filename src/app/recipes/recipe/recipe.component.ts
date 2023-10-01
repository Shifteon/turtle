import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent  implements OnInit {
  @Input() small = false;
  shrinkCssClass = false;

  constructor() { }

  ngOnInit() {}

  expand() {
    if (!this.small) return;
    this.small = false;
    this.shrinkCssClass = false;
  }

  shrink(event: any) {
    event.stopPropagation();
    this.small = true;
    this.shrinkCssClass = true;
    // setTimeout(() => {
    //   this.shrinkCssClass = false;
    // }, 2000);
  }
}
