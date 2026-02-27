import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';

export class WinScene extends BaseScene {
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
        this.container.addChild(this.winText);
    }

}