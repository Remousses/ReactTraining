import { useSelector } from 'react-redux'
import { countTodo, completedTodos } from '../store';

function Header() {
    const count = useSelector(countTodo)
    const completed = useSelector(completedTodos)

    return (
        <h1>Todo List ({count} todos) et ({completed}) todos faites</h1>
    );
}

export default Header;