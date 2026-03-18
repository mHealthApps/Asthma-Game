import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const GameHost = ({ GameClass, storageIndex }) => {
    const ref = useRef(null);

    // Creating events to pass into the Pixi game
    const navigate = useNavigate();
    const completeSection = () => {
        setTimeout(() => {
            navigate('/asthma-list');
        }, 0)
    }

    // Setting the events to be passed to the game
    const uponCompletion = () => {
        // Would be a real function in the other pages such as nextScene()
        console.log("React page acknowledges game completion");
        completeSection();
    }

    const setScore = (score) => {
        console.log(`React page receives game score: ${score}`);
    }

    // TODO: this is duplicate code from QuizCards (both change for backend)
    const conditionTitle = 'ASTHMA'
    const updateStorage = () => {
        if (conditionTitle !== undefined) {
        console.log(`conditionTitle: ${conditionTitle}`);
        const key = conditionTitle.toLowerCase() + 'List';
        let completedLists = localStorage.getItem(key);
        console.log(`completedList: ${completedLists}`);
        if (completedLists === null) {
            console.log('error: no storage detected');
        } else {
            completedLists = completedLists.substring(0, storageIndex) + '1' + completedLists.substring(storageIndex + 1, completedLists.length);
            console.log(`new storage data: ${completedLists}`)
            localStorage.setItem(key, completedLists);
        }
        } else {
        console.log('conditionTitle failure');
        }
    }

    const events = {
        uponCompletion,
        setScore,
        updateStorage
    }

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
