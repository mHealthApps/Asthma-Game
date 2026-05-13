import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GameHost = ({ GameClass, content, storageIndex }) => {
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
    const updateStorage = async () => {
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

            // sync to backend
            const token = localStorage.getItem("token"); // Retrieve the JWT
            if (token) {
                try {
                await axios.put("http://127.0.0.1:5000/api/completion", {
                    // We use storageIndex as the module_id to match your bit-string position
                    module_id: storageIndex.toString(), 
                    completed: true
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("Backend sync successful");
                } catch (err) {
                console.error("Backend sync failed:", err);
                }
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
            content, // specific images, text, etc. to be included in the game
            events,
            /*  Pass events as object of event functions 
                This allows passing multiple functions into the Pixi App which can be called in-game
                The main events that must be passed are uponCompletion, setScore, updateStorage */
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
