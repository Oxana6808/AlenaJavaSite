import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p1',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p1.component.html',
  styleUrl: './subcontent2p1.component.css'
})
export class Subcontent2p1Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
