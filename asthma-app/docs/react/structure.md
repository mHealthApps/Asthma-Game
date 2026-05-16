# React App File Structure

## Description
This document breaks down the structure of the client directory. The client directory is the react app, it holds the react modules, src, etc. To run the app locally you run 'npm start' from in the client directory.

## Structure
```text
client/
    public/
    src/
        assets/
            audio/
            images/
            videos/
        components/
        games/
        hooks/
        pages/
            interactive/
            static/
        index.js
        style.cs
```

### client/
The main directory that houses the react app

### public/
Autmoatticaly generated directory of a react app, holds basic react html, logos, etc.

### src/
Contains the main react app source code

#### assets/
Contains the image, video, pdf, etc. assets for the project
- audio/ --> .mp3 files
- images/ --> .jpg files
- videos/ --> .mp4 files

#### components/
Contains renderable, reusablee react components used throughout the application.
- For further explanation of a few key components see [module-content-passing.md](module-content-passing.md)

#### games/
Contains the PixiJS source code for the 3 game types
- For structure explanation of the games/ directory see [games/structure.md](../games/structure.md)

#### hooks/
Contains the custom react hooks used in the app for state handling

#### pages/
Contains the react pages which are rendered as Routes by the react Router
- interactive/ --> pages that dynamically change such as the learning module
- static/

#### index.js
Main react page which contains Router

#### style.css
Styling page (the only one), contains all custom class styling

