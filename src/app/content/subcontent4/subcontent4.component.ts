import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4.component.html',
  styleUrl: './subcontent4.component.css'
})
export class Subcontent4Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
