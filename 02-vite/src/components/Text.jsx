import { useState } from "react";
import Button from "./Button";

function Text({initial}) {
    const [name, setName] = useState(initial || '');
    return (
        <div>
            <Button onClick={() => setName('Fiorella')}>Fiorella</Button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={() => setName('')} disabled={!name}>Supprimer</Button>
            {name && <h1>Ton prénom est {name}</h1>}
        </div>
    );
}

export default Text;