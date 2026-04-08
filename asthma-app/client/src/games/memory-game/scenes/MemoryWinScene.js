import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';
import PixiButton from '../../shared/PixiButton';

export class MemoryWinScene extends BaseScene {
    constructor(app, score, uponCompletion) {
        super(app);
        this.score = score;
        this.uponCompletion = uponCompletion;
        this.displayMore();
    }

    build() {
        // Initialization of win message
        this.winText = new Text({
            text: 'You Win!',
            style: {
                fill: '#ffffff',
                fontSize: 50,
                fontFamily: 'sans-serif',
            },
            anchor: 0.5,
            x: this.app.screen.width / 2,
            y: this.app.screen.height / 2 - 75
        });
        this.app.renderer.background.color = 0xddc79a;
        this.container.addChild(this.winText);
    }

    displayMore() {
        this.timeText = new Text({
            text: `Score: ${this.score}`,
            style: {
                fill: '#ffffff',
                fontSize: 40,
                fontFamily: 'sans-serif',
            },
            anchor: 0.5,
            x: this.app.screen.width / 2,
            y: this.app.screen.height / 2,
        });
        this.container.addChild(this.timeText);

        // Completion button
        this.completionButton = new PixiButton(this.app.screen.width / 2, this.app.screen.height / 2 + 90, 350, "Exit Game", this.uponCompletion);
        this.container.addChild(this.completionButton.view);
    }

    update() {
        this.completionButton.update();
    }

}
