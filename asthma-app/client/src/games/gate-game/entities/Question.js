import { Container, Text } from 'pixi.js';
import Gates from './Gates';


export default class Question {
    constructor(app, changeScore, questions, playerX, setTimeout) {
        this.view = new Container();
        this.app = app;
        this.changeScore = changeScore;
        this.questions = questions;
        this.playerX = playerX;
        this.setTimeout = setTimeout;

        this.resetQuestion = () => {
            if (this.gates) {
                this.view.removeChild(this.gates.view);
                this.gates.destroy();
            }
            this.generateQuestion();
        }

        this.questionText = new Text({
            text: '',
            style: {
                fill: '#ffffff',
                fontSize: 30,
                fontFamily: 'sans-serif',
            },
            anchor: (0, 0),
            x: 20,
            y: this.app.screen.height - 140
        });
        this.generateQuestion();
        this.view.addChild(this.questionText);
    }

    generateQuestion() {
        this.pickRandomQuestion();
        // console.log(this.app.screen.width);
        this.gates = new Gates(this.app.screen.width / 2, this.app.screen.height / 8, this.app.screen.width, this.chosenQuestion.options, this.changeScore, this.playerX, this.setTimeout, this.resetQuestion);
        this.questionText.text = this.chosenQuestion.text;
        this.view.addChild(this.gates.view);
    }

    pickRandomQuestion() {
        // Picks random to begin then cycles through until game ends
        if (this.questionIndex === undefined) {
            this.questionIndex = Math.floor(Math.random() * this.questions.length);
        } else {
            this.questionIndex = (this.questionIndex + 1) % this.questions.length;
        }
        this.chosenQuestion = this.questions[this.questionIndex];
    }

    update() {
        this.gates.update(this.app.screen.width, this.app.screen.height);
    }
}