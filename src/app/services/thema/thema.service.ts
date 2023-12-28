// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);

  toggleTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.value);
    this.updateTheme();
  }

  private updateTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme.value);
  }
  isDark() {
    return this.isDarkTheme.value;
  }
}
