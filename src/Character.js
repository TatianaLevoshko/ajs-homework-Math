export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._attack = 0;
    this._stoned = false;
    this._distance = 1;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let attackValue = this._attack * (1 - (this._distance - 1) * 0.1);
    if (this._stoned) {
      attackValue -= Math.log2(this._distance) * 5;
    }
    return Math.max(0, attackValue);
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }
}
