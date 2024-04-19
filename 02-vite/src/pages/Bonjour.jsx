import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Bonjour() {
    const { name } = useParams()
    const navigate = useNavigate()
    const [search, setSearch] = useState(name)

    useEffect(() => {
        console.log('call API ' + {name});
    }, [name]) // name important de mettre name pour faire le refaire le call API car modification de name

    const sayHello = (e) => {
        e.preventDefault();
        navigate('/bonjour/ ' + search)
    }

    return (
        <>
            <h1>Bonjour {name}</h1>

            <form onSubmit={sayHello}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button>Dire bonjour</button>
            </form>
        </>
    );
}

export default Bonjour;