import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My {{name}} Angular App</h1>'
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = 'Third';
  }
}