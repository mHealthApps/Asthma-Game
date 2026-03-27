import { Container, Assets } from 'pixi.js';
import MemoryCard from './MemoryCard';
import Background_1 from '../../../assets/images/1_Background.jpg';
import Blue_Inhaler_v2_21 from '../../../assets/images/21_Blue Inhaler_v2.jpg';


export default class MemoryBoard {
    constructor(x, y, size) {
        this.view = new Container();
        this.view.x = x;
        this.view.y = y;
        this.size = size;
        this.activeCard = -1;
        this.allowInteraction = true;
        this.cards = [];

        this.generateCards();
    }

    async generateCards() {
        await this.preload();
        for (let i = 0; i < 16; i++) {
            const card = new MemoryCard(((i % 4) - 1.5) * (this.size * 5 / 19), (Math.floor((i / 4)) -1.5) * (this.size * 5 / 19), i, 'blue-inhaler', (this.size * 4 / 19), this.handleCardClick.bind(this));
            this.cards.push(card);
            this.view.addChild(card.view);
        }
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = [
            { alias: 'card-top', src: Background_1 },
            { alias: 'blue-inhaler', src: Blue_Inhaler_v2_21 },
        ];

        this.imageSizes = []

        // Load the assets defined above.
        await Assets.load(this.assets);
    }

    handleCardClick = function(index) {
        if (!this.allowInteraction || this.activeCard === index) {
            return false;
        }
        if (this.activeCard > -1) {
            // TODO: Check if pair
            this.timeoutInteraction(index);
        } else {
            this.activeCard = index;
        }
        return true;
    }

    async timeoutInteraction(index) {
        this.allowInteraction = false;
        setTimeout(() => {
            this.cards[index].resetFlip();
            this.cards[this.activeCard].resetFlip();
            this.allowInteraction = true;
            this.activeCard = -1;
        }, 1500);
    }

    update() {
        this.cards.forEach((card) => {
            card.update();
        })
    }
}