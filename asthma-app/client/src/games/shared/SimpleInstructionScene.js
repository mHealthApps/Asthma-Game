import { BaseScene } from './BaseScene';
import { Text, Graphics, FillGradient } from 'pixi.js';
import PixiButton from './PixiButton';

export class SimpleInstructionScene extends BaseScene {
    constructor(app, content, gameTitle, instructions, nextScene) {
        super(app, content);
        this.gameTitle = gameTitle;
        this.instructions = instructions;
        this.nextScene = nextScene;
        this.displayMore();
    }

    build() {
        this.background = new Graphics();

        const radialGradient = new FillGradient({
            type: 'radial',
            center: { x: 0.5, y: 0.5 },
            innerRadius: 0,
            outerCenter: { x: 0.5, y: 0.5 },
            outerRadius: 0.5,
            colorStops: [
                { offset: 0, color: 0xEDD5A5 }, // Center color
                { offset: 1, color: 0xB8A580 }   // Edge color
                // { offset: 0, color: 'green' }, // Center color
                // { offset: 1, color: 'yellow' }   // Edge color
            ],
            // Use normalized coordinate system where (0,0) is the top-left and (1,1) is the bottom-right of the shape
            textureSpace: 'local'
        });

        this.background.rect(0, 0, this.app.screen.width, this.app.screen.height);
        this.background.fill(radialGradient);

        this.container.addChild(this.background);
    }

    displayMore() {
        // Initialization of headers and instruction text
        /* Game Title Text */
        this.titleText = new Text({
            text: this.gameTitle,
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
            text: this.instructions,
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

        // Play game button
        this.playButton = new PixiButton(this.app.screen.width / 2, this.app.screen.height * 0.80, 350, "Play Game", this.nextScene);
        this.container.addChild(this.playButton.view);
    }

    update() {
        this.playButton.update();
    }

}
