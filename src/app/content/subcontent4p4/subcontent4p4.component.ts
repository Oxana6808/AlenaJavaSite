import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent4p4',
  standalone: true,
  imports: [],
  templateUrl: './subcontent4p4.component.html',
  styleUrl: './subcontent4p4.component.css'
})
export class Subcontent4p4Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
