import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p10',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p10.component.html',
  styleUrl: './subcontent4p10.component.css'
})
export class Subcontent4p10Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
