import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HeaderComponent} from "./header/header.component";
import {ContentComponent} from "./content/content.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,
  MenuComponent,
  HeaderComponent,
  ContentComponent
  ]
})
export class AppComponent {
  title = 'AlenaJavaSite';
}
