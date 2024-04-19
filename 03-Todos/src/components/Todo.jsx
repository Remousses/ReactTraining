import { useDispatch } from "react-redux";
import { flushSync } from 'react-dom';
import { deleteTodo, editTodo, toggle } from "../store";
import { useRef } from "react";
import { useState } from "react";

function Todo({ todo }) {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(null);
    const editInput = useRef(null)

    const startEdit = () => {
        
        flushSync(() => setEditing({ ...todo })); // Le DOM sera mis à jour de manière synchrone
        editInput.current.focus();
    }

    const endEdit = () => {
        dispatch(editTodo({ ...editing }));
        setEditing(null);
    }

    return (
        <div className="grid todo-grid">
            <input type="checkbox" role="switch" checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
            {!editing && <span onDoubleClick={startEdit}>{todo.name} ({todo.id})</span>}
            {editing &&
                <input ref={editInput} type="text" value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                onBlur={endEdit} />
            }
            <span role="button" className="secondary" onClick={() => dispatch(deleteTodo(todo.id))}>X</span>
        </div>
    );
}

export default Todo;