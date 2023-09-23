import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from 'src/app/color-theme/color-theme.service';

@Component({
  selector: 'app-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.scss'],
})
export class ColorThemeComponent  implements OnInit {
  appliedMode: string = "";
  appliedTheme: string = "";
  colorThemes: { value: string; name: string }[] = [];
  modes: { value: string; name: string }[] = [];

  constructor(private colorThemeService: ColorThemeService) { }

  ngOnInit() {
    this.colorThemes = this.colorThemeService.getThemeNames();
    this.appliedTheme = this.colorThemeService.getAppliedTheme();
    this.appliedMode = this.colorThemeService.getAppliedMode();
    this.modes = this.colorThemeService.getModes();
  }

  onModeSelect(event: any) {
    this.colorThemeService.setMode(event.target.value);
    this.appliedMode = this.colorThemeService.getAppliedMode();
  }

  onThemeSelect(event: any) {
    this.colorThemeService.setTheme(event.target.value);
    this.appliedTheme = this.colorThemeService.getAppliedTheme();
  }
}
