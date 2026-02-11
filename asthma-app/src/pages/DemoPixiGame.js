import GameHost from '../components/GameHost';
import { DemoGame } from '../games/demo-game/DemoGame';
import { Col } from 'react-bootstrap';

const DemoPixiGame = () => (
  <div className="asthma-red">
    <div className="justify-content-center quiz-headers">
      <Col>
        <br />
        <h2 className="headers asthma-header">MHealthApp</h2>
        <h2 className="headers card-num-headers quiz-text">Game Demo</h2>
      </Col>
    </div>
    <GameHost GameClass={DemoGame} />
  </div>
);

export default DemoPixiGame;