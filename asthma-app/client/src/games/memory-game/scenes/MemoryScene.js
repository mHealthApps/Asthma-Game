import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';
import MemoryBoard from '../entities/MemoryBoard';

export class MemoryScene extends BaseScene {
    build() {
        // Initialization of score and text
        this.score = 0;
        const changeScore = (increment) => {
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
        this.app.renderer.background.color = '#409d7e';
        this.container.addChild(this.scoreText);

        // Initialization of the memory board
        this.board = new MemoryBoard(this.app.screen.width / 2, this.app.screen.height / 2, Math.min(this.app.screen.width, this.app.screen.height) * 0.80);
        this.container.addChild(this.board.view);
    }

    update() {
        // Update the board
        
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}