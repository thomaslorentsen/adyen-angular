export class Card {

  constructor(
    public holderName: string,
    public cc: number,
    public cvv: number,
    public expiryMonth: number,
    public expiryYear: number
  ) {  }

}
