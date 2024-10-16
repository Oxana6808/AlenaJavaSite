import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p2',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p2.component.html',
  styleUrl: './subcontent2p2.component.css'
})
export class Subcontent2p2Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
