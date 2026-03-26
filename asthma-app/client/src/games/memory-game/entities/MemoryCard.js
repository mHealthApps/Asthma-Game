import { Container, Sprite } from 'pixi.js';

export default class MemoryCard {
    constructor(x, y, type) {
        this.type = type;

        this.view = new Container();
        this.view.x = x;
        this.view.y = y;

        this.card = Sprite.from(this.type);
        this.card.scale.set(0.067);
        this.view.addChild(this.card);
    }

    update() {

    }
}