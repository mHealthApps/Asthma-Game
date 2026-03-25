import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';
import PixiButton from '../../shared/PixiButton';

export class InstructionScene extends BaseScene {
    constructor(app, nextScene) {
        super(app);
        this.nextScene = nextScene;
        this.displayMore();
    }

    build() {
        // Initialization of headers and instruction text
        /* Game Title Text */
        this.titleText = new Text({
            text: 'Healthy Lungs Game',
            style: {
                fontSize: this.app.screen.width * 0.07,
                fontFamily: 'Chewy, system-ui',
                fontWeight: 400,
                fontStyle: 'normal',
                fill: '#ff5823',
                texShadow: '2px 2px 2px rgba(50, 50, 50, 0.8)',
                wordWrap: true,
                wordWrapWidth: this.app.screen.width,
                align: 'center'
            },
            x: this.app.screen.width / 2,
            y: this.app.screen.height * 0.2
            
        });
        this.titleText.anchor.set(0.5, 1);

        /* Instruction Header Text */
        this.instructionHeaderText = new Text({
            text: 'Instructions:',
            style: {
                fill: '#ffffff',
                fontSize: this.app.screen.width * 0.04,
                fontFamily: 'sans-serif',
                wordWrap: true,
                wordWrapWidth: this.app.screen.width * 0.8,
            },
            x: this.app.screen.width * 0.1,
            y: this.app.screen.height * 0.40
        });
        this.instructionHeaderText.anchor.set(0, 1);

        /* Instructions Text */
        this.instructionText = new Text({
            text: 'In this game you must click the falling objects that are good for your lungs, while avoiding the things that may trigger asthma flare ups.',
            style: {
                fill: '#ffffff',
                fontSize: this.app.screen.width * 0.032,
                fontFamily: 'sans-serif',
                wordWrap: true,
                wordWrapWidth: this.app.screen.width * 0.8,
            },
            x: this.app.screen.width / 2,
            y: this.app.screen.height * 0.43
        });
        this.instructionText.anchor.set(0.5, 0);

        // Setting background color and appendint texts to the container
        this.app.renderer.background.color = 0xddc79a;
        this.container.addChild(this.titleText);
        this.container.addChild(this.instructionHeaderText);
        this.container.addChild(this.instructionText);
    }

    displayMore() {
        // Play game button
        this.playButton = new PixiButton(this.app.screen.width / 2, this.app.screen.height * 0.80, 350, "Play Game", this.nextScene);
        this.container.addChild(this.playButton.view);
    }

    update() {
        this.playButton.update();
    }

}
