import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p7',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p7.component.html',
  styleUrl: './subcontent4p7.component.css'
})
export class Subcontent4p7Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
