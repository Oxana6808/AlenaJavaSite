import { Component, AfterViewInit} from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent2p4',
  standalone: true,
  imports: [],
  templateUrl: './subcontent2p4.component.html',
  styleUrl: './subcontent2p4.component.css'
})
export class Subcontent2p4Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Подсветка кода после загрузки
  }
}
