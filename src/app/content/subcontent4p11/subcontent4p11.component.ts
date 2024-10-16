import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p11',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p11.component.html',
  styleUrl: './subcontent4p11.component.css'
})
export class Subcontent4p11Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
