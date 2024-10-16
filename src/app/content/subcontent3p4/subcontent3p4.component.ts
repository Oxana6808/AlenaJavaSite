import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p4',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p4.component.html',
  styleUrl: './subcontent3p4.component.css'
})
export class Subcontent3p4Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
