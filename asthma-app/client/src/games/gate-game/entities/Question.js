import { Container, Text } from 'pixi.js';
import Gates from './Gates';


export default class Question {
    constructor(app, changeScore, questions) {
        this.view = new Container();
        this.app = app;
        this.changeScore = changeScore;
        this.questions = questions;

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
        this.gates = new Gates(this.app.screen.width / 2, this.app.screen.height / 8, this.app.screen.width, this.chosenQuestion.options, this.changeScore);
        this.questionText.text = this.chosenQuestion.text;
        this.view.addChild(this.gates.view);
    }

    pickRandomQuestion() {
        // Maybe make question choice not be completely random
        this.chosenQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    }

    update() {
        
    }
}