import { Container, Assets } from 'pixi.js';
import MemoryCard from './MemoryCard';
import Background_1 from '../../../assets/images/1_Background.jpg';


export default class MemoryBoard {
    constructor(x, y, size, content, changeHintText, changeScore) {
        this.view = new Container();
        this.view.x = x;
        this.view.y = y;
        this.size = size;
        this.content = content;
        this.changeHintText = changeHintText;
        this.changeScore = changeScore;
        this.removedPairs = 0;
        this.activeCard = -1;
        this.allowInteraction = true;
        this.chosenHint = '';
        this.imageSequence = [];
        this.cards = [];
        this.remainingCards = [];

        this.generateCards();
    }

    async generateCards() {
        await this.preload();
        await this.setPairs();
        await this.pushCards();
        this.chooseHint();
    }

    pushCards() {
        for (let i = 0; i < 16; i++) {
            const card = new MemoryCard(((i % 4) - 1.5) * (this.size * 5 / 19), (Math.floor((i / 4)) -1.5) * (this.size * 5 / 19), i, this.imageSequence[i], (this.size * 4 / 19), this.handleCardClick.bind(this));
            this.cards.push(card);
            this.view.addChild(card.view);
        }
        this.remainingCards = this.cards.slice();
        // console.log(this.remainingCards);
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = [
            { alias: 'card-top', src: Background_1 },
        ];
        for (let i = 0; i < this.content.length; i++) {
            this.assets.push(
                { alias: this.content[i].alias, src: this.content[i].src }
            );
        }
        // console.log(this.assets);

        // Load the assets defined above.
        await Assets.load(this.assets);
    }

    async setPairs() {
        const pairOptions = [];
        for (let i = 0; i < 16; i++) {
            pairOptions.push(i);
        }
        const imageOptions = this.content.slice();
        for (let i = 0; i < 8; i++) {
            const imageOption = imageOptions.splice(Math.floor(Math.random() * imageOptions.length), 1)[0];
            this.imageSequence[pairOptions.splice(Math.floor(Math.random() * (pairOptions.length - 1)), 1)[0]] = imageOption;
            this.imageSequence[pairOptions.pop()] = imageOption;
            // console.log(pairOptions);
            // console.log(this.imageSequence);
        }
        // console.log(this.imageSequence);
    }

    chooseHint() {
        this.chosenHint = this.remainingCards[Math.floor(Math.random() * this.remainingCards.length)].type.hint;
        this.changeHintText(this.chosenHint);
        // console.log('Chosen hint: ' + this.chosenHint);
    }

    handleCardClick = function(index) {
        if (!this.allowInteraction || this.activeCard === index) {
            return false;
        }
        if (this.activeCard > -1) {
            this.timeoutInteraction(index);
        } else {
            this.activeCard = index;
        }
        return true;
    }

    async timeoutInteraction(index) {
        this.allowInteraction = false;
        setTimeout(() => {
            // Check if user found a pair then score or reset if not a pair
            if (this.cards[index].type.alias === this.cards[this.activeCard].type.alias) {
                if (this.cards[index].type.hint === this.chosenHint) {
                    this.changeScore(30);
                    this.remainingCards.splice(index, 1);
                    this.remainingCards.splice(this.activeCard, 1);
                    this.chooseHint();
                } else {
                    this.changeScore(20);
                }
                this.removedPairs++;
                
                this.cards[index].remove();
                this.cards[this.activeCard].remove();
            } else {
                this.cards[index].resetFlip();
                this.cards[this.activeCard].resetFlip();
            }
            this.allowInteraction = true;
            this.activeCard = -1;
        }, 1500);
    }
    
}