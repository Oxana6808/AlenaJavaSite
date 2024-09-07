import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router'; // Импорт RouterModule

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    RouterModule  // Импортируем RouterModule для поддержки routerLink
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent {

}