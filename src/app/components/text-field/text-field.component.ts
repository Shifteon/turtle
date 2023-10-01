import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent  implements OnInit {
  @Input() background: string = "";
  @Input() id: string = "";
  @Input() label: string = "";
  @Input() name: string = "";

  constructor() { }

  ngOnInit() {
    this.background = "var(" + this.background + ")";
  }

}
