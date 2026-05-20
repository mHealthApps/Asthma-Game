# React Architecture

## Routing
The application uses a HashRouter meaning it does client-side routing between pages. All pages are imported and added to the router in index.js. 
/login and /signup are the only guest routes, meaning all other pages require login.

## Modules 
The user can navigate to any of the 6 learning modules from the /asthma-list page.
Each learning module (for example: TheLungs) is hosted on a single page, however it moves through a series of states:
In game mode:
StackedCards --> Game
Not in game mode:
StackedCards --> Quiz --> Summary

To see the series of scenes for a page look for code near the bottom of each module page structured like this:
```js
    switch (scene) {
        case 0:
            return <StackedCards cards={lungsCards} title="The Lungs" uponCompletion={nextScene} />
        case 1:
            return <Quiz quiz={lungsQuiz} uponCompletion={nextScene} conditionTitle='ASTHMA' animation={Lungs_Oxygen_Animation_30} alt='lungs' audios={[AudioFile9, AudioFile9a, AudioFile9b]} />
        case 2:
            return <Summary image={Lungs_Oxygen_28} alt="lungs-wide" explanation="Oxygen helps our body to function properly. We need around 432 litres of oxygen per day." buttonLink="/asthma-list" audio={AudioFile10} />
        default:
            return <div>Error: rendering failed</div>
    }
    // See how nextScene is passed into the first two components so that they can call it to advance to the next scene
```

## Mobile Responsive
The application is made mobile responsive in two main ways:
1) use of the --vh variable (100th of screen height) in CSS styling
2) useOrientation hook actively tracks whether the screen is 'portrait' or 'landscape'
React components call useOrientation and make layout and sizing choises based on the screen orientation

## localStorage
- localStorage is used for keeping track of whether audio is on or off in the key: soundOff
0 = audio on, 1 = audio off
- see backend documentation for more uses of localStorage

## Key Functions and Content Passing
See [module-content-passing.md](module-content-passing.md) for more details on the key React components of the project