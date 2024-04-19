import { useDispatch, useSelector } from "react-redux";
import { allTodos } from "../store";
import Todo from './Todo'

function TodoList() {
    const todos = useSelector(allTodos)

    return (
        <div>
            {todos?.map(todo =>
                <Todo key={todo.id} todo={todo}/>
            )}
        </div>
    );
}

export default TodoList;