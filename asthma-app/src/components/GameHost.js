import { useEffect, useRef } from 'react';

const GameHost = ({ GameClass }) => {
    const ref = useRef(null);

    useEffect(() => {
        // TODO: create eventBus
        const events = null;
        const game = new GameClass({
            container: ref.current,
            events,
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
