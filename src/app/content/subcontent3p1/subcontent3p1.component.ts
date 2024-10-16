import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p1',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p1.component.html',
  styleUrl: './subcontent3p1.component.css'
})
export class Subcontent3p1Component implements AfterViewInit  {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
