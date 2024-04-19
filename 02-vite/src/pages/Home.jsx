import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import Text from "../components/Text";
import Ajax from "./Ajax";
import Clock from "../components/Clock";

function Home() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <Button>Envoyer</Button>
            <Button>Valider</Button>

            <Text />
            <Text initial="Toto" /> 

            <List />

            <button onClick={() => setDisplay(!display)}>Afficher / cacher horloge</button>
            {display && <Clock />}
            <Ajax />
        </>
    );
}

export default Home;