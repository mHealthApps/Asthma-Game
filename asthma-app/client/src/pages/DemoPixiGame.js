import GameHost from '../components/GameHost';
import { DemoGame } from '../games/demo-game/DemoGame';
import { Col } from 'react-bootstrap';

const DemoPixiGame = () => {
  const uponCompletion = () => {
    // Would be a real function in the other pages such as nextScene()
    console.log("React page acknowledges game completion");
  }

  const setScore = (score) => {
    console.log(`React page receives game score: ${score}`);
  }

  const demoEvents = {
    uponCompletion,
    setScore
  }

  return (
    <div className="asthma-red">
      <div className="justify-content-center quiz-headers">
        <Col>
          <br />
          <h2 className="headers asthma-header">MHealthApp</h2>
          <h2 className="headers card-num-headers quiz-text">Game Demo</h2>
        </Col>
      </div>
      <GameHost GameClass={DemoGame} events={demoEvents} />
    </div>
  )
};

export default DemoPixiGame;