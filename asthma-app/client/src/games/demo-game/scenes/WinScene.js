import { BaseScene } from '../../shared/BaseScene';
import { Text, Graphics, FillGradient } from 'pixi.js';
import PixiButton from '../../shared/PixiButton';

export class WinScene extends BaseScene {
    constructor(app, content, completionTime, uponCompletion) {
        super(app, content);
        this.completionTime = completionTime;
        this.uponCompletion = uponCompletion;
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
            text: `Completion Time: ${Math.ceil(this.completionTime / 10) / 100} sec`,
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
