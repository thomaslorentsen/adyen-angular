import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<payment-form></payment-form>`,
})
export class AppComponent  { name = 'Angular'; }
