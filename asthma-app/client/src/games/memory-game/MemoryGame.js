import { BaseGame } from '../shared/BaseGame';
import { SimpleInstructionScene } from '../shared/SimpleInstructionScene';
import { MemoryScene } from './scenes/MemoryScene';
import { MemoryWinScene } from './scenes/MemoryWinScene';

/*  
Events used in this game:
setScore(score): score recorded at the end of the game
uponCompletion(): called at the end of the game for completion
updateStorage(): called when you win the game to update module completion
*/

export class MemoryGame extends BaseGame {
    async run() {
        // Function to begin MemoryScene
        this.playGame = () => {
            this.setScene(new MemoryScene(this.app, this.content));
        }
        // Set the initial scene
        this.setScene(new SimpleInstructionScene(this.app, this.content, 'Asthma Memory Game', 'In this game you must find the pairs of asthma-related objects. If you find a pair, you score points and the pair disapears. Collect all pairs to win.', this.playGame));


        // Listen for animate update
        this.app.ticker.add((time) => {
            if (this.currentScene) {
                this.currentScene.update();
                // Detection of win condition
                if (this.currentScene.isGame && this.currentScene.score >= 160) {
                    // TODO: change next scene condition so that dynamic score
                    this.events.setScore(this.completionTime);
                    this.events.updateStorage();
                    this.setScene(new MemoryWinScene(this.app, this.content, this.currentScene.score, this.events.uponCompletion));
                }
            }
        });
    }
}
