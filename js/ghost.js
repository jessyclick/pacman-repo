import { OBJECT_TYPE, DIRECTIONS } from "./starter.js";

class Ghost {
  constructor(speed = 5, startPos, movement, name) {
    this.pos = startPos;
    this.speed = speed;
    this.dir = DIRECTIONS.ArrowRight;
    this.timer = 0;
    this.rotation = false;

    this.name = name;
    this.movement = movement;
    this.startPos = startPos;
    this.isScared = false;
  }

  shouldMove() {
    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
    return false;
  }

  getNextMove(objectExist) {
    const { nextMovePos, direction } = this.movement(
      this.pos,
      this.dir,
      objectExist
    );

    return { nextMovePos, direction };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];
    let classesToAdd = [OBJECT_TYPE.GHOST, this.name];

    if (this.isScared) classesToAdd.push(OBJECT_TYPE.SCARED);

    return { classesToRemove, classesToAdd };
  }

  setNewPos(nextMovePos, direction) {
    this.pos = nextMovePos;
    this.dir = direction;
  }
}

export default Ghost;
