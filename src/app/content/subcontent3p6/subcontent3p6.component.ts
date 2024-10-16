import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p6',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p6.component.html',
  styleUrl: './subcontent3p6.component.css'
})
export class Subcontent3p6Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
