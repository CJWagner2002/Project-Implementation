import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-page',
  standalone: true,
  imports: [CommonModule, SelectPageComponent],
  templateUrl: './select-page.component.html',
  styleUrl: './select-page.component.css'
})
export class SelectPageComponent {
  title = 'order';
}
