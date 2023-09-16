export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    /* eslint-disable no-unused-vars */
    this._amount = amount;
    this._currency = currency;
    /* eslint-enable no-unused-vars */
  }

  /* getter amount */
  get amount() {
    return this._amount;
  }

  /* setter amount */
  set amount(value) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    this._amount = value;
  }

  /* getter currency */
  get currency() {
    return this._currency;
  }

  /* setter currency */
  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    const currencyAll = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyAll}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
