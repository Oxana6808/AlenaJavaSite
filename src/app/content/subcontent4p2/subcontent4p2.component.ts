import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p2',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p2.component.html',
  styleUrl: './subcontent4p2.component.css'
})
export class Subcontent4p2Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
