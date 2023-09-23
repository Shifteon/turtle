import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular"

const THEMES = [
  { value: "plum", name: "Plum" },
  { value: "lapis", name: "Lapis"},
  { value: "fern", name: "Fern" },
  { value: "sunset", name: "Sunset" }
];

const DARK = { value: "dark-theme", name: "Dark" };
const LIGHT = { value: "light-theme", name: "Light" };
const DEFAULT = { value: "default", name: "System Default" };

const THEME_KEY = "theme";
const MODE_KEY = "mode";

@Injectable({
  providedIn: "root"
})
export class ColorThemeService {
  private appliedTheme: string = THEMES[2].value;
  private appliedMode: string = DEFAULT.value;


  constructor(private storage: Storage) {}

  async init() {
    const value = await this.storage.get(THEME_KEY);
    const mode = await this.storage.get(MODE_KEY);
    this.setTheme(value ?? THEMES[2].value);
    this.setMode(mode ?? DEFAULT);
  }

  getAppliedMode(): string {
    return this.appliedMode;
  }

  getAppliedTheme(): string {
    return this.appliedTheme;
  }

  getModes(): { value: string; name: string }[] {
    return [DEFAULT, DARK, LIGHT];
  }

  getThemeNames(): { value: string; name: string }[] {
    return THEMES;
  }

  setMode(mode: typeof DARK.value | typeof LIGHT.value | typeof DEFAULT.value) {
    const htmlElement = document.querySelector('html');
    if (mode === DEFAULT.value) {
      htmlElement?.classList.remove(DARK.value);
      htmlElement?.classList.remove(LIGHT.value);
      return;
    }
    htmlElement?.classList.remove(mode === LIGHT.value ? DARK.value : LIGHT.value);
    htmlElement?.classList.add(mode);
    this.appliedMode = mode;
    this.storage.set(MODE_KEY, mode);
  }

  setTheme(theme: string) {
    if (!THEMES.some(t => t.value === theme)) return;

    const htmlElement = document.querySelector('html');
    for (const theme of THEMES) {
      htmlElement?.classList.remove(theme.value);
    }
    htmlElement?.classList.add(theme);
    this.appliedTheme = theme;
    this.storage.set(THEME_KEY, theme);
  }
}