import { Container, Assets } from 'pixi.js';
import MemoryCard from './MemoryCard';
import Background_1 from '../../../assets/images/1_Background.jpg';
import Lung_32 from '../../../assets/images/32_Lung.jpg';
import TealShirt_Girl_Coughing_4 from '../../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import Red_Inhaler_20 from '../../../assets/images/20_Red Inhaler.jpg';
import Blue_Inhaler_v2_21 from '../../../assets/images/21_Blue Inhaler_v2.jpg';
import Purple_Inhaler_22 from '../../../assets/images/22_Purple Inhaler.jpg';
import Spacer_19 from '../../../assets/images/19_Spacer.jpg';
import All_Inhalers_23 from '../../../assets/images/23_All Inhalers_v2.jpg';
import Toddler_Doctor_17 from '../../../assets/images/17_Toddler_Doctor.jpg';
import Asthma_Action_Plan_33 from '../../../assets/images/33_Asthma Action Plan.jpg';

const pairContent = [
    {
        alias: 'blue-inhaler',
        src: Blue_Inhaler_v2_21,
        hint: 'This type of inhaler works fast, helping with short breath, coughes, and wheezing'
    }, 
    {
        alias: 'lungs',
        src: Lung_32,
        hint: 'The part of the body that asthma occurs in'
    },
    {
        alias: 'teal-cough', 
        src: TealShirt_Girl_Coughing_4,
        hint: 'This girl is experiencing some asthma symptoms'
    },
    {
        alias: 'red-inhaler', 
        src: Red_Inhaler_20,
        hint: 'This type of inhaler is designed to be taken every day to reduce swelling in the breathing tubes'
    },
    {
        alias: 'purple-inhaler', 
        src: Purple_Inhaler_22,
        hint: 'Is a combination medication designed to be taken every day'
    },
    {
        alias: 'spacer', 
        src: Spacer_19,
        hint: 'Tool designed to be used with an inhaler so medicines get into the breathing tubes'
    },
    {
        alias: 'all-inhalers', 
        src: All_Inhalers_23,
        hint: 'Find the collection of different inhaler types'
    },
    {
        alias: 'toddler-doctor', 
        src: Toddler_Doctor_17,
        hint: 'It is important to take your child for regular check-ups with your doctor or health clinic'
    },
    {
        alias: 'asthma-action-plan',
        src: Asthma_Action_Plan_33,
        hint: 'A doctor written plan that helps you to know what to do every day, and when asthma is becoming worse'
    }
];

export default class MemoryBoard {
    constructor(x, y, size, changeScore) {
        this.view = new Container();
        this.view.x = x;
        this.view.y = y;
        this.size = size;
        this.changeScore = changeScore;
        this.removedPairs = 0;
        this.activeCard = -1;
        this.allowInteraction = true;
        this.imageSequence = [];
        this.cards = [];

        this.generateCards();
    }

    async generateCards() {
        await this.preload();
        await this.setPairs();
        for (let i = 0; i < 16; i++) {
            const card = new MemoryCard(((i % 4) - 1.5) * (this.size * 5 / 19), (Math.floor((i / 4)) -1.5) * (this.size * 5 / 19), i, this.imageSequence[i], (this.size * 4 / 19), this.handleCardClick.bind(this));
            this.cards.push(card);
            this.view.addChild(card.view);
        }
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = [
            { alias: 'card-top', src: Background_1 },
        ];
        for (let i = 0; i < pairContent.length; i++) {
            this.assets.push(
                { alias: pairContent[i].alias, src: pairContent[i].src }
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
        const imageOptions = pairContent;
        for (let i = 0; i < 8; i++) {
            const imageOption = imageOptions.splice(Math.floor(Math.random() * imageOptions.length), 1)[0];
            this.imageSequence[pairOptions.splice(Math.floor(Math.random() * (pairOptions.length - 1)), 1)[0]] = imageOption;
            this.imageSequence[pairOptions.pop()] = imageOption;
            // console.log(pairOptions);
            // console.log(this.imageSequence);
        }

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
            if (this.cards[index].type === this.cards[this.activeCard].type) {
                this.changeScore(20);
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

    update() {
        this.cards.forEach((card) => {
            card.update();
        })
    }
}