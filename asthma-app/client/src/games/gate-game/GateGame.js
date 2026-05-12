import { BaseGame } from '../shared/BaseGame';
import { SimpleInstructionScene } from '../shared/SimpleInstructionScene';
import { GateScene } from './scenes/GateScene';
import { GateWinScene } from './scenes/GateWinScene';

/*  
Events used in this game:
setScore(score): score recorded at the end of the game
uponCompletion(): called at the end of the game for completion
updateStorage(): called when you win the game to update module completion
*/

export class GateGame extends BaseGame {
    async run() {
        // Function to begin GameScene
        this.playGame = () => {
            this.setScene(new GateScene(this.app, this.content));
        }
        // Set the initial scene
        let instructions = 'In this game you must move your character so that they walk through the gate which contains the proper answer to the question.';
        if (this.content.instructions !== undefined) {
            instructions = this.content.instructions;
        }
        this.setScene(new SimpleInstructionScene(this.app, this.content, 'Asthma Questions Gate Game', instructions, this.playGame));


        // Listen for animate update
        this.app.ticker.add((time) => {
            if (this.currentScene) {
                this.currentScene.update();
                if (this.currentScene.isGame) {
                    // detects winning condition
                    if (this.currentScene.score >= 30) {
                        setTimeout(() => {
                            // console.log(this.completionTime);
                            this.events.setScore(this.currentScene.score);
                            this.events.updateStorage();
                            this.setScene(new GateWinScene(this.app, this.content, this.currentScene.score, this.events.uponCompletion));
                        }, 500)
                    }
                }
            }
        });
    }
}
