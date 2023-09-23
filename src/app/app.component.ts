import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ColorThemeService } from 'src/app/color-theme/color-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private colorThemeService: ColorThemeService, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.colorThemeService.init();
  }
}
