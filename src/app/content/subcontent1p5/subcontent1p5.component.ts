import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1p5',
  standalone: true,
  imports: [],
  templateUrl: './subcontent1p5.component.html',
  styleUrl: './subcontent1p5.component.css'
})
export class Subcontent1p5Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
