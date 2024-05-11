import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectPageComponent } from '../select-page/select-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [RouterModule, SelectPageComponent, CommonModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  title = 'checkout';
  @Input() selectedItems: any[] = [];
  constructor() {}
}
