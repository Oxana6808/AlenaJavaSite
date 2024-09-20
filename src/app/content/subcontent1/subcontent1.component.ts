import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1',
  standalone: true,
  templateUrl: './subcontent1.component.html',
  styleUrls: ['./subcontent1.component.css']
})
export class Subcontent1Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
