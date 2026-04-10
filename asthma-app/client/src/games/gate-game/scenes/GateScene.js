import { BaseScene } from '../../shared/BaseScene';
import { Text, Assets, Graphics } from 'pixi.js';
import Question from '../entities/Question';
import Player from '../entities/Player';
import Controller from '../systems/Controller';
import Background_1 from '../../../assets/images/1_Background.jpg';
import Lung_32 from '../../../assets/images/32_Lung.jpg';
import Kidney_15 from '../../../assets/images/15_Kidney.jpg'
import OrgShirt_Girl_Sitting_5 from '../../../assets/images/5_OrgShirt_Girl_Sitting.jpg';
import TealShirt_Girl_Coughing_4 from '../../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import Red_Inhaler_20 from '../../../assets/images/20_Red Inhaler.jpg';
import Blue_Inhaler_v2_21 from '../../../assets/images/21_Blue Inhaler_v2.jpg';
import Purple_Inhaler_22 from '../../../assets/images/22_Purple Inhaler.jpg';
import Spacer_19 from '../../../assets/images/19_Spacer.jpg';
import All_Inhalers_23 from '../../../assets/images/23_All Inhalers_v2.jpg';
import Toddler_Doctor_17 from '../../../assets/images/17_Toddler_Doctor.jpg';
import Asthma_Action_Plan_33 from '../../../assets/images/33_Asthma Action Plan.jpg';

const questions = [
    {
        text: 'What is asthma?',
        /* The first option is the correct one, in the Gate entity the answers are shuffled */
        options: [
            {
                text: 'Lung Condition',
                image: 'lungs'
            },
            {
                text: 'Kidney Condition',
                image: 'kidneys'
            },
        ]
    },
    // {
    //     text: `How do I know my child’s asthma is under control?` ,
    //     options: [
    //     {
    //         text: 'May have loud wheeze. They may have sucking\n in at the neck and chest and blue lips',
    //         image: 'blue-inhaler'
    //     },
    //     {
    //         text: 'Not waking up coughing or wheezing',
    //         image: 'orgshirt-sitting'
    //     },
    //     ],
    // },
]

export class GateScene extends BaseScene {
    build() {
        // Game checks if this variable exists to know what scene it is
        this.isGame = true;
        // Initialization of score and text
        this.score = 0;
        this.changeScore = (increment) => {
            this.score += increment;
        }

        this.scoreText = new Text({
            text: 'Score: 0',
            style: {
                fill: '#ffffff',
                fontSize: 36,
                fontFamily: 'sans-serif',
            },
            anchor: (0, 0),
            x: 20,
            y: this.app.screen.height - 60
        });
        this.app.renderer.background.color = 0x1099bb;
        this.path = new Graphics();
        this.draw = function() {
            this.path.poly([this.app.screen.width * 0.15, this.app.screen.height, this.app.screen.width * 0.85, this.app.screen.height, this.app.screen.width * 0.57, this.app.screen.height * 0.12, this.app.screen.width * 0.43, this.app.screen.height * 0.12]);
            this.path.fill('#B0B0B0');
        }
        this.draw();
        this.container.addChild(this.path);

        this.container.addChild(this.scoreText);

        this.generateQuestionEntities();
        this.player = new Player(this.app, this.changeScore);
        this.controller =  new Controller(this.app, this.player.view);
        this.container.addChild(this.player.view);
    }

    async generateQuestionEntities() {
        await this.preload();

        this.questionEntity = new Question(this.app, this.changeScore, questions);
        this.container.addChild(this.questionEntity.view);
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = [
            { alias: 'card-top', src: Background_1 },
            { alias: 'blue-inhaler', src: Blue_Inhaler_v2_21 },
            { alias: 'lungs', src: Lung_32},
            { alias: 'kidneys', src: Kidney_15},
            { alias: 'orgshirt-sitting', src: OrgShirt_Girl_Sitting_5},
            { alias: 'teal-cough', src: TealShirt_Girl_Coughing_4},
            { alias: 'red-inhaler', src: Red_Inhaler_20},
            { alias: 'purple-inhaler', src: Purple_Inhaler_22},
            { alias: 'spacer', src: Spacer_19},
            { alias: 'all-inhalers', src: All_Inhalers_23},
            { alias: 'toddler-doctor', src: Toddler_Doctor_17},
            { alias: 'asthma-action-plan', src: Asthma_Action_Plan_33},
        ];

        // Load the assets defined above.
        await Assets.load(this.assets);
    }

    update() {
        // Update the Question Entity
        if (this.questionEntity) {
            this.questionEntity.update();
        }
        if (this.controller) {
            this.controller.update();
        }
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}