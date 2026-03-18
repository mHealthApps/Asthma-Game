import { useState, useEffect } from 'react';

/* This is the hook which interactive pages will call to determine rendering scenes */
const useIsGameMode = () => {
    /* Handles storage of the user's choice of wheter gameMode is active and returns the boolean state */
    const [isGameMode, setIsGameMode] = useState(() => {
        let gameMode = localStorage.getItem("gameMode");
        if (gameMode === null) {
            // default value of gameMode is true if no storage exists
            gameMode = "true";
        }
        return gameMode === "true";
    });

    useEffect(() => {
        const gameMode = localStorage.getItem("gameMode");
        // update storage if the state does not match with the storage
        if (gameMode !== String(isGameMode)) {
            console.log(`gameMode set to : ${String(isGameMode)}`)
            localStorage.setItem("gameMode", String(isGameMode));
        }
    }, [isGameMode])

    return [isGameMode, setIsGameMode];
}

export default useIsGameMode;
