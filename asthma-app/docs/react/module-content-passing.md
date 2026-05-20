# Module Content Passing

## Description
Content is passed through many page and component layers in the React system. This document provides an overview in how this content is passed from component to component. This document also shows the basic format of data passing into parameters for the key React components:
- StackedCards.js
- Quiz.js
- Summary.js
- GameHost.js

## Design
For the six learning modules, all content (text, images, etc.) originates in one of the 6 module pages:
- TheLungs.js
- AboutAsthma.js
- AsthmaTreatment.js
- AsthmaManagement.js
- HealthyLifestyle.js
- FirstAid.js

This means that all images and text used in the StackedCards, Quiz, Summary, or GameHost components related to a module will originate in that module's page.
All images must be imported to that page and a reference passed to further components.
Components such as StackedCards, Quiz, Summary, or GameHost components will pass content into their own sub-components as needed (see their code)

## Formatting
### StackedCards:
Parameters:
- cards (Array<CardContent>): Array of objects (see formatting below)
- title (string): Title of the module
- uponCompletion (function): Function to be called when all cards all complete
- conditionTitle (string): Title of condition; is always 'Asthma'

Formatting of CardContent:
```js
{
    audio: AudioFile1, // Audio file associated with the card
    image: Lungs_Anatomy_25, // Image on the card
    alt: 'lungs',
    // Text content on the card
    text: <div> 
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>What your lungs do</li>
        <li className='grid-left'>How your lungs work</li>
      </ul>
      <IntroCardFooter />
    </div>,
},
. . .
```

### Quiz:
Parameters:
- quiz (<QuizContent>): Object of quiz content (see format below)
- uponCompletion (function): Function to be called when quiz is complete
- conditionTitle (string): Title of condition; is always 'Asthma'
- image (reference to asset): Main image associated with image if any
- alt - (string): Description of image
- animation (reference to asset): Main .mp4 animation associated with image if any
- audios (Array of 3 audio assets): [question audio, correct audio, incorrect audio]

Formatting of Quiz Content:
```js
{
  type: 'two-options', // other type removed only this one is used
  name: 'THIS OR THAT', // Title of the quiz, text at the top
  text: `Is oxygen important for our body?`, // Question text
  options: [ // Each option with its text an (optional) associated image 
    {
      text: 'Yes',
      image: '',
    },
    {
      text: 'No',
      image: '',
    },
  ],
  answer: 0, // Index of which answer above is correct
  index: 0, // Module index: [TheLungs, AboutAsthma, AsthmaTreatment, AsthmaManagement, HealthyLifestyle, FirstAid]
}
```

### Summary:
Parameters:
- image (reference to asset): Main image associated with image if any
- alt - (string): Description of image
- conditionTitle (string): Title of condition; is always 'Asthma'
- explanation (string): Text explanation of summary
- buttonLink (string): '/asthma-list' Link to navigate to upon button click
- audio (reference to audio asset): Audio to be played on this screen

### GameHost:
For further explanation see [games/architecture.md](../games/architecture.md)

Parameters:
- GameClass (Object): Instance of 1 of the 3 game types
- content (Object): Formatting is game dependent see game/archetecture for more
- storageIndex (int): Module index: [TheLungs, AboutAsthma, AsthmaTreatment, AsthmaManagement, HealthyLifestyle, FirstAid]