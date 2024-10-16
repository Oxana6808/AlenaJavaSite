import { Component , AfterViewInit} from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent3p7',
  standalone: true,
  imports: [],
  templateUrl: './subcontent3p7.component.html',
  styleUrl: './subcontent3p7.component.css'
})
export class Subcontent3p7Component implements AfterViewInit {
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
