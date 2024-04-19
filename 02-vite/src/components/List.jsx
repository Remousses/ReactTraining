import { useState } from "react";

let nextId = 4;
function List() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
        { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
        { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
    ]);

    const [newUser, setNewUser] = useState({ id: null, name: '', avatar: false });

    const addUser = () => {
        setUsers([
            ...users,
            {
                ...newUser,
                id: nextId++,
                avatar: newUser.avatar ? 'https://i.pravatar.cc/150?u=' + newUser.name : null 
            }
        ]);
        setNewUser({ id: null, name: '', avatar: false });
    };

    const editUser = (id) => {
        setUsers(users.map((user) => user.id === id ? {...user, name: user.name.toLocaleUpperCase()} : user));
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleChange = (newValue, field) => {
        setNewUser({
            ...newUser,
            [field]: newValue
        });
    }

    return (
        <>
            <ul>
                {users.map((user) => 
                    <li key={user.id}>
                        <h2 onClick={() => editUser(user.id)}>{user.name} ({user.id})</h2>
                        {user.avatar && <img src={user.avatar} alt={user.name}/>}
                        <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                    </li>
                )}
            </ul>
            <input type="text" value={newUser.name} onChange={(e) => handleChange(e.target.value, 'name')}/>
            <input type="checkbox" checked={newUser.avatar} onChange={(e) => handleChange(e.target.checked, 'avatar')}/>
            <button onClick={addUser}>Ajouter</button>
        </>
    );
}

export default List;