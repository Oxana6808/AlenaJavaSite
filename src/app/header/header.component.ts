import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';  // Импортируем модуль Material Toolbar
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';  // Импортируем MatIconModule
import { MenuComponent } from '../menu/menu.component';  // Импортируем MenuComponent
import { CommonModule } from '@angular/common';  // Импортируем CommonModule для использования ngClass
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  standalone: true,  // Указываем, что это standalone-компонент
  imports: [
    CommonModule,  // Добавляем CommonModule
    RouterOutlet,     // Подключаем RouterOutlet для работы с маршрутизацией
    MatToolbarModule,  // Подключаем MatToolbarModule для работы с Material Toolbar
    MatIconModule,  // Добавляем MatIconModule для иконок
    MatSidenavModule,  // Добавляем MatSidenavModule для работы с боковой панелью
    MenuComponent, // Добавьте MenuComponent в массив imports
    MatMenuModule  // Добавляем MatMenuModule в массив imports
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isOpen  = false;


  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  //
  // toggleMenu() {
  //   this.isOpen  = !this.isOpen ;
  //   this.isOpen  ? this.sidenav.open() : this.sidenav.close();
  // }
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  //
  // onSidenavClick() {
  //   this.isMenuOpen = false; // Закрытие меню после выбора элемента
  // }
}
