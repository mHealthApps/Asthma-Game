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

        this.shadow = new Graphics();
        this.draw = function() {
            this.shadow.roundRect(-(width / 2.4), -(width / 2.4), width, width, width * 0.095);
            this.shadow.fill({ color: 'black', alpha: 0.3 });
        }
        this.draw();

        // Enable interaction
        this.card.eventMode = 'static';
        this.card.cursor = 'pointer';

        this.card.on('pointerdown', () => {
            if (onClick(index)) {
                this.card.texture = Texture.from(this.type.alias);
                this.card.width = width;
                this.card.height = width;
            }
        });

        // Create rounded rectangle mask
        this.mask = new Graphics()
            .roundRect(-(width / 2), -(width / 2), width, width, width * 0.095)
            .fill(0xffffff);
        this.card.mask = this.mask;

        this.view.addChild(this.shadow);
        this.view.addChild(this.mask);
        this.view.addChild(this.card);
    }

    resetFlip() {
        this.card.texture = Texture.from('card-top');
        this.card.scale.set(this.width * 0.01);
    }

    remove() {
        this.card.destroy();
        this.mask.destroy();
        this.shadow.destroy();
    }
}