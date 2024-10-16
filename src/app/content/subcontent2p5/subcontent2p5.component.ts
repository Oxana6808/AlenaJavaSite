import { Component, AfterViewInit} from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p5',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p5.component.html',
  styleUrl: './subcontent2p5.component.css'
})
export class Subcontent2p5Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
