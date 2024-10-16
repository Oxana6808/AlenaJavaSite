import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2.component.html',
  styleUrl: './subcontent2.component.css'
})
export class Subcontent2Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}


