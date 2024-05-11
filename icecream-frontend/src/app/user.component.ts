import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<div>Name is {{name}}</div>`,
  styles: `div {color: green}`
})

export class UserComponent {
  name = "Bob"
}
