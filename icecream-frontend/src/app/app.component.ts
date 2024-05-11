import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { SelectPageComponent } from './select-page/select-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HomepageComponent, NavbarComponent, FooterComponent, CheckoutPageComponent, SelectPageComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentView = 'home';
  title = 'icecream-frontend';
}


