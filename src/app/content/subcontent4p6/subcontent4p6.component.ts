import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p6',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p6.component.html',
  styleUrl: './subcontent4p6.component.css'
})
export class Subcontent4p6Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
