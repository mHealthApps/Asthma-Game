import { BaseScene } from '../../shared/BaseScene';
import { Text, Assets, Graphics } from 'pixi.js';
import Question from '../entities/Question';
import Player from '../entities/Player';
import Controller from '../systems/Controller';
// import PathLine from '../entities/PathLine';


export class GateScene extends BaseScene {
    build() {
        // Game checks if this variable exists to know what scene it is
        this.isGame = true;
        // Initialization of score and text
        this.score = 0;
        this.attempts = 0;
        this.player = new Player(this.app, this.changeScore);
        this.gateTimeout = false;
        this.playerX = (numPartitions) => {
            if (this.gateTimeout) {
                return null;
            }
            return Math.floor((this.player.view.x / this.app.screen.width) * numPartitions);
        }
        this.setTimeout = () => {
            this.gateTimeout = true;
            setTimeout(() => {
                this.gateTimeout = false;
            }, 1500)
        }
        this.changeScore = (increment) => {
            this.score += increment;
            if (this.attempts === undefined) {
                this.attempts = 1;
            } else {
                this.attempts++;
            }
            console.log(this.attempts);
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

        // this.line = new PathLine(this.app, 0);
        // this.container.addChild(this.line.view);

        this.container.addChild(this.scoreText);

        this.generateQuestionEntities();
        this.controller =  new Controller(this.app, this.player.view);
        this.container.addChild(this.player.view);
    }

    async generateQuestionEntities() {
        await this.preload();

        this.questionEntity = new Question(this.app, this.changeScore, this.content.questions, this.playerX, this.setTimeout);
        this.container.addChild(this.questionEntity.view);
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = this.content.assets;

        // Load the assets defined above.
        await Assets.load(this.assets);
    }

    update() {
        // Update the Question Entity
        if (this.questionEntity && this.controller) {
            // this.line.update();
            this.questionEntity.update();
            this.controller.update();
        }
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}