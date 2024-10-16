import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p3',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p3.component.html',
  styleUrl: './subcontent2p3.component.css'
})
export class Subcontent2p3Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
