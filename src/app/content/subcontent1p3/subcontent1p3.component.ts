import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1p3',
  standalone: true,
  imports: [],
  templateUrl: './subcontent1p3.component.html',
  styleUrl: './subcontent1p3.component.css'
})
export class Subcontent1p3Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
