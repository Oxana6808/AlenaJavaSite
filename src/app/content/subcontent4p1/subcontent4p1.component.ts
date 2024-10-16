import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p1',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p1.component.html',
  styleUrl: './subcontent4p1.component.css'
})
export class Subcontent4p1Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
