import { useEffect, useRef, useState } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());
    // useEffect permet de conserver une valeur pendant toute la durée de vie du composant
    const oldDate = useRef(null);

    // Quand le composant est chargé dans le DOM
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('refresh'); // affichez 2 fois car React.StrictMode dans main.jsx (normal)
            setDate(new Date())
        }, 1000);

        return () => { // executé avant le code du dessus dans le cas d'une mise à jour
            // code appelé lors de la destuction du composant
            clearInterval(timer);
        }
    }, []); // [] => Le useEffect se fait 1 seule fois

    // Lance le code à chage mise à jour du composant
    useEffect(() => {
        console.log('NOUVELLE DATE', date)
        console.log('ANCIENNE DATE', date)
        if (date.getSeconds() % 10 === 0) {
            console.log('ding dong')
        }

        return () => { // executé avant le code du dessus dans le cas d'une mise à jour
            console.log('ANCIENNE DATE CLEAN UP', date)
            oldDate.current = date;
        }
    }, [date])

    return (
        <h1>{date.toLocaleTimeString()}</h1>
    );
}

export default Clock;