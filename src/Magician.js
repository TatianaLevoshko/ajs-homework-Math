class Character {
    constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.distance = 1;
    this.stoned = false;
    }
  
    get attack() {
    let effectiveAttack = this.baseAttack;
    if (this.distance === 1) effectiveAttack *= 1;
    else if (this.distance === 2) effectiveAttack *= 0.9;
    else if (this.distance === 3) effectiveAttack *= 0.8;
    else if (this.distance === 4) effectiveAttack *= 0.7;
    else if (this.distance === 5) effectiveAttack *= 0.6;
  
    if (this.stoned) {
        effectiveAttack -= Math.log2(this.distance) * 5;
    }
  
    return effectiveAttack;
    }
  
    set distance(value) {
    this._distance = value;
    }
  
    get distance() {
    return this._distance;
    }
  
    set stoned(value) {
    this._stoned = value;
    }
  
    get stoned() {
    return this._stoned;
    }
  }
  
  class Magician extends Character {
    
  }
  
  export default Magician;
  