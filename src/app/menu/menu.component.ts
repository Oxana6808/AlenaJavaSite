import { Component, Input } from '@angular/core';  // Импортируем декоратор Input
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isMenuOpen = false;  // Добавляем Input для получения значения от родительского компонента

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLinkClick(event: Event, path: string) {
    event.preventDefault();
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }
}
