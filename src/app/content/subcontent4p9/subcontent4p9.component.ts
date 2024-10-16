import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p9',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p9.component.html',
  styleUrl: './subcontent4p9.component.css'
})
export class Subcontent4p9Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
