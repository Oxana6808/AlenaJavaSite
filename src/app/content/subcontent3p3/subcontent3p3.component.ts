import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p3',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p3.component.html',
  styleUrl: './subcontent3p3.component.css'
})
export class Subcontent3p3Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
