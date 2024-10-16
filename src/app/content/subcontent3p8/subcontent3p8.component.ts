import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p8',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p8.component.html',
  styleUrl: './subcontent3p8.component.css'
})
export class Subcontent3p8Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
