export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  /* getter sqft */
  get sqft() {
    return this._sqft;
  }

  /* setter sqft */
  set sqft(value) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = value;
  }
}
