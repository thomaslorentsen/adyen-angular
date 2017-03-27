import { Injectable }    from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Card } from './card'
import { Product } from './product'

@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  /**
   * post(card: Card, product: Product): Promise<void> {
    return
  }**/

}
