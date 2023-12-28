// theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../../services/thema/thema.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button class="btn btn-primary" (click)="toggleTheme()">
      <span class="material-icons">{{ icon }}</span>
    </button>
  `,
  styles: []
})
export class ThemeToggleComponent {
  icon: string = 'light_mode';

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.icon = this.themeService.isDark() ? 'dark_mode' : 'light_mode';
  }
}
