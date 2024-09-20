import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1p1',
  standalone: true,
  imports: [],
  templateUrl: './subcontent1p1.component.html',
  styleUrl: './subcontent1p1.component.css'
})
export class Subcontent1p1Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
