import { Component } from '@angular/core';

import { Card }    from './card';

@Component({
    selector: 'payment-form',
    templateUrl: './payment-form.component.html'
})

export class PaymentFormComponent {
  model = new Card('John Smith', 4111111111111111, 737, 8, 2018)
}
