import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p5',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p5.component.html',
  styleUrl: './subcontent3p5.component.css'
})
export class Subcontent3p5Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
