import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';

@Component({
  selector: 'app-select-page',
  standalone: true,
  imports: [CommonModule, SelectPageComponent, RouterModule, SelectPageComponent, CheckoutPageComponent],
  templateUrl: './select-page.component.html',
  styleUrl: './select-page.component.css'
})
export class SelectPageComponent {
  title = 'order';
  images: any[] = [];
  @Output() selectedImages = new EventEmitter<any[]>();
  selectImage(image: any) {
    image.selected = !image.selected;
    console.log('Selected Images:', this.images.filter(img => img.selected));
    this.selectedImages.emit(this.images.filter(img => img.selected));

  }
}
