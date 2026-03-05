import { useEffect, useRef } from 'react';

const GameHost = ({ GameClass, events }) => {
    const ref = useRef(null);

    useEffect(() => {
        const game = new GameClass({
            container: ref.current,
            events,
            /*  Pass events as object of event functions 
                This allows passing multiple functions into the Pixi App which can be called in-game
                The main event that must be passed is uponCompletion to move the game on after its done */
        })

        game.start();

        return () => {
            game.destroy();
        }
    })


    return (
        <div ref={ref} className='pixijs-app-container' />
    );
}

export default GameHost;
