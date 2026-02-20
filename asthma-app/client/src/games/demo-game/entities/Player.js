export default class Player {
  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  // getters
  get x() {
    return this.positionX;
  }

  get y() {
    return this.positionY;
  }

  // setters
  set x(value) {
    this.positionX = value;
  }

  set y(value) {
    this.positionY = value;
  }
  
}