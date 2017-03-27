declare var adyen: any;
declare var cseInstance: any;

import { Component } from '@angular/core'
import { Injectable }    from '@angular/core'
import { Headers, Http } from '@angular/http'

import { Card }    from './card';
import { Product }    from './product';

@Component({
    selector: 'payment-form',
    templateUrl: './payment-form.component.html'
})

@Injectable()
export class PaymentFormComponent {

  data = '123'

  model = new Card('John Smith', '4111111111111111', '737', '08', '2018', '', '')
  product = new Product('Widgets', 10.00)

  constructor(private http: Http) { }

  onSubmit() {

    var d = new Date()
    this.model.generationTime = d.toISOString()

    // The form element to encrypt.
    var form    = document.getElementById('adyen-encrypted-form');
    var options = {};

    var encryptedForm = adyen.createEncryptedForm( form, options);

    var cseInstance = adyen.encrypt.createEncryption(encryptedForm.key, options);

    var cardData = {
      number : this.model.cc,
      cvc : this.model.cvc,
      holderName : this.model.holderName,
      expiryMonth : this.model.expiryMonth,
      expiryYear : this.model.expiryYear,
      generationtime : this.model.generationTime
    };

    try {
      var enc = cseInstance.encrypt(cardData)

      var data = {
        amount: this.product.amount,
        generationTime: this.model.generationTime,
        adyenEncryptedData: cseInstance.encrypt(cardData)
      }

      console.log(data)

    } catch(exception) {
      console.log(exception)
      return
    }

    var host = 'http://10.174.132.180/pay'

    this.http.post(host, {
      data
    }).subscribe();

  }
}
