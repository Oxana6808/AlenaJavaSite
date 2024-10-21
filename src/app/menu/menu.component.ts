import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Router } from '@angular/router';  // Импорт RouterModule и Router для навигации
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatExpansionModule,
    RouterModule,  // Импортируем RouterModule для поддержки routerLink
    MatMenuModule  // Добавляем MatMenuModule в массив imports
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // isOpen = false; // Добавляем свойство isOpen

  constructor(private router: Router) {}
  //
  // onLinkClick(route: string) {
  //   this.router.navigate([route]);
  // }
  // toggleMenu() {
  //   this.isOpen = !this.isOpen;
  // }
  onLinkClick(event: Event, route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);  // Навигация по маршруту
  }

  
}
