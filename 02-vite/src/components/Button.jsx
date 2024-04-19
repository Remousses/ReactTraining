import { useState } from "react";

function Button({children, onClick, ...props}) {
    // Le state d'un composant est une valeur qui peut changer et va provoquer une mise à jour du dom
    const [enabled, setEnabled] = useState(false);
    const toggle = () => {
        setEnabled(!enabled);
        onClick(); // callback défini dans le composant appelant
    }

    return (
        <button {...props} onClick={toggle}>
            {children} {enabled && '✅'}
        </button>
    );
}

export default Button;