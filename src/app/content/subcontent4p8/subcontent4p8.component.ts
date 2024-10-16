import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p8',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p8.component.html',
  styleUrl: './subcontent4p8.component.css'
})
export class Subcontent4p8Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
