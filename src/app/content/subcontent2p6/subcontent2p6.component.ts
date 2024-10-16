import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p6',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p6.component.html',
  styleUrl: './subcontent2p6.component.css'
})
export class Subcontent2p6Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
