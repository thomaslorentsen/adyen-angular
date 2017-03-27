export class Card {

  constructor(
    public holderName: string,
    public cc: string,
    public cvc: string,
    public expiryMonth: string,
    public expiryYear: string,
    public generationTime: string,
    public akey: string
  ) {  }

}
