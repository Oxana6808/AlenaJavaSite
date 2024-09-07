import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Импорт RouterModule

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
