import { useDispatch, useSelector } from "react-redux";
import { removeName } from "../store";

const Header = () => {
    const users = useSelector(state => state.user)
    return <h1>{users.length} utilisateurs</h1>
};

const List = () => {
    const users = useSelector(state => state.user)
    return <ul>
                {users.map((user) => 
                    <Item key={user.id} user={user}/>
                )}
            </ul>
};

const Item = ({ user }) => {
    const dispatch = useDispatch()
    return <li onClick={() => dispatch(removeName(user.id))}>{user.name}</li>
};

function AvecRedux() {
    return ( 
        <>
            <Header />
            <List />
        </>
     );
}

export default AvecRedux;