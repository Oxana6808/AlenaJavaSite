import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1p2',
  standalone: true,
  imports: [],
  templateUrl: './subcontent1p2.component.html',
  styleUrl: './subcontent1p2.component.css'
})
export class Subcontent1p2Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
