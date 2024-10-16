import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p3',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p3.component.html',
  styleUrl: './subcontent4p3.component.css'
})
export class Subcontent4p3Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
