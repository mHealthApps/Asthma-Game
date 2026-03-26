import { Container, Assets } from 'pixi.js';
import MemoryCard from './MemoryCard';
import Background_1 from '../../../assets/images/1_Background.jpg';

export default class MemoryBoard {
    constructor(x, y, size) {
        this.preload();
        this.view = new Container();
        this.view.x = x;
        this.view.y = y;
        // this.view.anchor.set(0.5);
        // this.view.scale(size / 500);
        this.cards = [];

        for (let i = 0; i < 16; i++) {
            const card = new MemoryCard(((i % 4) - 2) * 125, Math.floor((i / 4) - 2) * 125, 'card-top');
            this.cards.push(card);
            this.view.addChild(card.view);
        }
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = [
            { alias: 'card-top', src: Background_1 },
        ];

        // Load the assets defined above.
        await Assets.load(this.assets);
    }

    update() {
        this.cards.forEach((card) => {
            card.update();
        })
    }
}