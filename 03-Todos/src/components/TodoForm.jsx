import { useState } from "react";
import { addTodo } from "../store";
import { useDispatch } from "react-redux";

const initTodo = {id: null, name: '', done: false}

function TodoForm() {
    const dispatch = useDispatch()
    const [isDisplayForm, setDisplayForm] = useState(false)
    const [newTodo, setNewTodo] = useState(initTodo)

    const displayForm = (toDisplay) => {
        setDisplayForm(toDisplay)
    }

    const handleChange = (newValue, field) => {
        setNewTodo({
            ...newTodo,
            [field]: newValue
        });
    }

    const saveTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(newTodo));
        setNewTodo(initTodo)
    }

    const cancel = () => {
        displayForm(false)
        setNewTodo(initTodo)
    }

    if (isDisplayForm) {
        return (
            <form onSubmit={saveTodo}>
                <input type="text" value={newTodo.name} onChange={(e) => handleChange(e.target.value, 'name')} />
                <div className="grid">
                    <button type="button" className="secondary" onClick={cancel}>Annuler</button>
                    <button type="submit" disabled={!newTodo.name}>Ajouter</button>
                </div>
            </form>
        )
    }

    return (
        <>
            <button onClick={() => displayForm(true)}>Ajouter</button>
        </>
    );
}

export default TodoForm;