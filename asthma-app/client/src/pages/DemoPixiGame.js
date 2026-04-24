import GameHost from '../components/GameHost';
// import { DemoGame } from '../games/demo-game/DemoGame';
// import { MemoryGame } from '../games/memory-game/MemoryGame';
import { GateGame } from '../games/gate-game/GateGame';

const DemoPixiGame = () => {
  return (
    <div className="asthma-red">
      <GameHost GameClass={GateGame} />
    </div>
  )
};

export default DemoPixiGame;