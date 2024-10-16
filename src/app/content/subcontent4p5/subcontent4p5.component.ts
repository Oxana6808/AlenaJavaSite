import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p5',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p5.component.html',
  styleUrl: './subcontent4p5.component.css'
})
export class Subcontent4p5Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
