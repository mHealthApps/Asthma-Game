# Pixi Game File Structure

## games/ Structure
```text
games/
    demo-game/
    gate-game/
    memory-game/
    shared/
```

### games/
Contains all Pixi games source code

### demo-game/
Contains the source code for the FallingObjects game

### gate-game/
Contains the source code for the GateGame

### memory-game/
Contains the source code for the MemoryGame

### shared/
Contains shared classes used by all games such as the base Game and Scene classes.

## Individual Game Structure
Each game follows this structure, if you want to make another game it would be helpful to follow (and it's okay to add to) this structure.

```text
game-title/
    entities/
    scenes/
    systems/    // this is optional
    GameTitle.js
```

### game-title/
Main directory containing the source code for this game see: demo-game, gate-game, etc.

### entities/
Entitities are the Pixi objects such as characters, boards, etc. which contain individual logic, display, positioning, etc.

### scenes/
Contains the scenes which are switched between by the main file.

### GameTitle.js
This is the main file of the game. It extends BaseGame.js and an instance of it is passed into GameHost.