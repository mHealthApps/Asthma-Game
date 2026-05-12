import { BaseGame } from '../shared/BaseGame';
import { SimpleInstructionScene } from '../shared/SimpleInstructionScene';
import { GameScene } from './scenes/GameScene';
import { WinScene } from './scenes/WinScene';

/*  
Events used in this game:
setScore(score): score recorded at the end of the game
uponCompletion(): called at the end of the game for completion
updateStorage(): called when you win the game to update module completion
*/

export class DemoGame extends BaseGame {
    async run() {
        // Function to begin GameScene
        this.playGame = () => {
            this.setScene(new GameScene(this.app, this.content));
        }
        // Set the initial scene
        let instructions = 'In this game you must click the falling objects that are good for your lungs, while avoiding the things that may trigger asthma flare ups.';
        if (this.content.instructions !== undefined) {
            instructions = this.content.instructions;
        }
        this.setScene(new SimpleInstructionScene(this.app, this.content, 'Healthy Lungs Game', instructions, this.playGame));


        this.completionTime = 0;
        // Listen for animate update
        this.app.ticker.add((time) => {
            if (this.currentScene) {
                this.currentScene.update();
                if (this.currentScene.score) {
                    this.completionTime += time.elapsedMS;
                    // detects winning the game in the game scene
                    if (this.currentScene.score >= 100) {
                        // console.log(this.completionTime);
                        this.events.setScore(this.completionTime);
                        this.events.updateStorage();
                        this.setScene(new WinScene(this.app, this.content, this.completionTime, this.events.uponCompletion));
                    }
                }
            }
        });
    }
}
