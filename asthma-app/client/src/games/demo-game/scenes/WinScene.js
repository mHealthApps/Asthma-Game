import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';

export class WinScene extends BaseScene {
    constructor(app, completionTime) {
        super(app);
        this.completionTime = completionTime;
        this.displayTime();
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
            y: this.app.screen.height / 2.5
        });
        this.app.renderer.background.color = 'black';
        this.container.addChild(this.winText);
    }

    displayTime() {
        this.timeText = new Text({
            text: `Completion Time: ${Math.ceil(this.completionTime / 10) / 100} sec`,
            style: {
                fill: '#ffffff',
                fontSize: 40,
                fontFamily: 'sans-serif',
            },
            anchor: 0.5,
            x: this.app.screen.width / 2,
            y: this.app.screen.height / 2.5 + 75,
        });
        this.container.addChild(this.timeText);
    }

}