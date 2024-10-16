import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p2',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p2.component.html',
  styleUrl: './subcontent3p2.component.css'
})
export class Subcontent3p2Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
