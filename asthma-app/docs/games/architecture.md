# PixiJS Games Architecture

## GameHost.js
This React component is the backbone in the PixiJS game system. Pixi has its own app running, handling rendering separately. GameHost is the React component which gives the Pixi app its canvas to run on.

You must pass GameHost an instance of one of the three game objects:
- DemoGame
- GateGame
- MemoryGame

### Events
GameHost also creates events to pass into the PixiJS game for state management. The three events are:
- uponCompletion --> called to navigate out of the Pixi game back to react pages
- setScore --> sets the score on the react-side (it does nothing with this value for now, but could be later updated to save scores)
- updateStorage --> updates the completion of that module value for the user

### Formatting
For content formatting into GameHost see [games-content-formatting.md](games-content-formatting.md)

## Scene Structure
Each game has a main file which extends the shared BaseGame.js, i.e. DemoGame, MemoryGame, GateGame. This file handles scene changes through the setScene() function. 

This file also holds the app.ticker. The code inside the ticker is called every animation frame of the app. So the ticker calls the current scene's update() function. The update() function of a scene calls the update() functions of entities in that scene.

## Game Containerization
For help with understanding Pixi rendering inheritance see [Pixi's scene graph documentation](https://pixijs.com/7.x/guides/basics/scene-graph)

Pixi rendering works by creating a series of appending a container or sprite into another container in a chain that is ultimately appended to app.stage.

The mainContainer is appended to app.stage in the BaseGame.js. Then in setScene, the current scene's container is appended to the mainContainer.

Anything that needs to be displayed in a scene needs to be appended to that scene's container. This is common for further Containers, Text, Sprite, views, etc.

Chart:

app.stage --> BaseGame.mainContainer --> currentScene.container --> view of the entity in that scene

## Creating a new game
If you want to create a new game type it should:
- extend BaseGame.js
- have scenes that extend BaseScene.js
- an instance of this game must be passed into a React GameHost component

Also:
you can create a new format for content passing as long as it is consistant in its use within the Pixi game