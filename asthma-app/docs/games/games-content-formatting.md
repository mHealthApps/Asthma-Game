# Content Formatting for GameHost

## Description
Content is passed into GameHost that holds specific text and images displayed in game dependent on which module the game is for. The formatting for this content is game type dependent

## Fomatting
### Demo Game:
```js
{
  objectTypes: [ // Array of two object types, positive scoring and negative scoring
    { 
      points: 10,
      color: 0xffffff,
      imageAliases: ['fruits', 'spacer', 'asthma-action-plan'] // list of different images that this type can have
    },
    {
      points: -10,
      color: 0xee0000,
      imageAliases: ['org-shirt-smokers', 'smoker-fastfood']
    }
  ],
  assets: [ // array of assets that will be rendered by the Pixi app, { alias, src }
    { alias: 'fruits', src: Fruits_34 }, 
    { alias: 'spacer', src: Spacer_19 }, 
    { alias: 'asthma-action-plan', src: Asthma_Action_Plan_33 }, 
    { alias: 'org-shirt-smokers', src: OrgShirt_Girl_Sitting_2Smokers_6 }, 
    { alias: 'smoker-fastfood', src: Smoker_FastFood_Vog_Pollen_7 }
  ]
}
```

### Memory Game:
```js
[ // array of objects which describe a pottential pair, you need at least 8 for the game to work correctly
    {
        alias: , // string that will Pixi will reference
        src: , // imported asset image for this type
        hint: , // string that is an accosiated hint for this image for bonus points in game
    },
    {
        alias: 'blue-inhaler',
        src: Blue_Inhaler_21,
        hint: 'This type of inhaler works fast, helping with short breath, coughs, and wheezing'
    }, 
    {
        alias: 'lungs',
        src: Lung_32,
        hint: 'The part of the body that asthma occurs in'
    },
    {
        alias: 'teal-cough', 
        src: TealShirt_Girl_Coughing_4,
        hint: 'This girl is experiencing some asthma symptoms'
    },
    {
        alias: 'red-inhaler', 
        src: Red_Inhaler_20,
        hint: 'This type of inhaler is designed to be taken every day to reduce swelling in the breathing tubes'
    },
    {
        alias: 'purple-inhaler', 
        src: Purple_Inhaler_22,
        hint: 'Is a combination medication designed to be taken every day'
    },
    {
        alias: 'spacer', 
        src: Spacer_19,
        hint: 'Tool designed to be used with an inhaler so medicines get into the breathing tubes'
    },
    {
        alias: 'all-inhalers', 
        src: All_Inhalers_23,
        hint: 'Find the collection of different inhaler types'
    },
    {
        alias: 'toddler-doctor', 
        src: Toddler_Doctor_17,
        hint: 'It is important to take your child for regular check-ups with your doctor or health clinic'
    },
    {
        alias: 'asthma-action-plan',
        src: Asthma_Action_Plan_33,
        hint: 'A doctor written plan that helps you to know what to do every day, and when asthma is becoming worse'
    }
]
```

### Gate Game:
```js
{
    questions: [ // array of potential questions
      { // each question contains the text for that question plus two options
          text: 'What is asthma?',
          /* The first option is the correct one, in the Gate entity the answers are shuffled */
          options: [
              {
                  text: 'Lung Condition',
                  image: 'lungs',
              },
              {
                  text: 'Kidney Condition',
                  image: 'kidneys',
              },
          ],
      },
      {
          text: `Where do your lungs sit?` ,
          options: [
            {
                text: 'In your chest',
                image: 'white-shirt-lungs'
            },
            {
                text: 'In your throat',
                image: 'teal-shirt'
            },
          ],
      },
      {
          text: 'What do lungs look like?',
          /* The first option is the correct one, in the Gate entity the answers are shuffled */
          options: [
              {
                  text: 'Upside down tree',
                  image: 'lung-tree',
              },
              {
                  text: 'Like this',
                  image: 'heart',
              },
          ],
      },
      {
          text: 'Where is the windpipe?',
          /* The first option is the correct one, in the Gate entity the answers are shuffled */
          options: [
              {
                  text: 'The long tube that goes from your mouth to the lungs',
                  image: 'lungs-text-2',
              },
              {
                  text: 'Small tubes within the lungs',
                  image: 'white-shirt-lungs-tube',
              },
          ],
      },
      {
          text: 'What do we breathe in?',
          /* The first option is the correct one, in the Gate entity the answers are shuffled */
          options: [
              {
                  text: 'Oxygen',
                  image: 'lungs-oxygen',
              },
              {
                  text: 'Carbon Dioxide',
                  image: 'lungs-oxygen',
              },
          ],
      },
      
  ],
  assets: [ // array of all assets that will be rendered by the Pixi app
    { alias: 'lungs', src: Lung_32 },
    { alias: 'kidneys', src: Kidney_15 },
    { alias: 'white-shirt-lungs', src: WhiteShirt_Girl_Lungs_10 },
    { alias: 'teal-shirt', src: TealShirt_Girl_Coughing_4 },
    { alias: 'lung-tree', src: Lung_Tree_31 },
    { alias: 'heart', src: Heart_14 },
    { alias: 'white-shirt-lungs-tube', src: WhiteShirt_Lungs_Tube_11 },
    { alias: 'lungs-text-2', src: Lungs_Text_2_27 },
    { alias: 'lungs-oxygen', src: Lungs_Oxygen_28 },
  ]
}
```