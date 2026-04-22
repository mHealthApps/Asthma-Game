import { BaseScene } from '../../shared/BaseScene';
import { Text } from 'pixi.js';
import MemoryBoard from '../entities/MemoryBoard';

export class MemoryScene extends BaseScene {
    build() {
        // Game checks if this variable exists to know what scene it is
        this.isGame = true;
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

        this.hintText = new Text({
            text: '',
            style: {
                fill: '#ffffff',
                fontSize: 24,
                fontFamily: 'sans-serif',
            },
            anchor: (0, 0),
            x: 20,
            y: this.app.screen.height - 90
        });
        this.container.addChild(this.hintText);
        const changeHintText = (newText) => {
            this.hintText.text = 'Hint for Bonus Points: ' + newText;
        }

        // Initialization of the memory board
        this.board = new MemoryBoard(this.app.screen.width / 2, this.app.screen.height / 2 - 20, Math.min(this.app.screen.width, this.app.screen.height) * 0.80, changeHintText, changeScore);
        this.container.addChild(this.board.view);
    }

    update() {
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}