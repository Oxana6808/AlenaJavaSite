import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1p4',
  standalone: true,
  imports: [],
  templateUrl: './subcontent1p4.component.html',
  styleUrl: './subcontent1p4.component.css'
})
export class Subcontent1p4Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }

}
