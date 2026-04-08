import GameHost from '../components/GameHost';
// import { DemoGame } from '../games/demo-game/DemoGame';
import { MemoryGame } from '../games/memory-game/MemoryGame';

const DemoPixiGame = () => {
  return (
    <div className="asthma-red">
      <GameHost GameClass={MemoryGame} />
    </div>
  )
};

export default DemoPixiGame;