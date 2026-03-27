import { Container, Sprite, Texture,Graphics } from 'pixi.js';

export default class MemoryCard {
    constructor(x, y, index, type, width, onClick) {
        this.type = type;

        this.view = new Container();
        this.view.x = x;
        this.view.y = y;
        this.width = width;

        this.card = Sprite.from('card-top');
        this.card.anchor.set(0.5);
        this.card.scale.set(width * 0.01);

        // Enable interaction
        this.card.eventMode = 'static';
        this.card.cursor = 'pointer';

        this.card.on('pointerdown', () => {
            if (onClick(index)) {
                this.card.texture = Texture.from(this.type);
                this.card.width = width;
                this.card.height = width;
            }
        });

        // Create rounded rectangle mask
        this.mask = new Graphics()
            .roundRect(-(width / 2), -(width / 2), width, width, width * 0.095)
            .fill(0xffffff);
        this.card.mask = this.mask;

        this.view.addChild(this.mask);
        this.view.addChild(this.card);
    }

    resetFlip() {
        this.card.texture = Texture.from('card-top');
        this.card.scale.set(this.width * 0.01);
    }

    update() {
        
    }
}