import "./style.css"
import { useState } from "react"

export default function InputTodoList({addTodo}){

    const [valueInput, setValueInput] = useState("")

    const handleNewTodo = () => {
        addTodo(valueInput)
    }

    return (
                <form onSubmit={(event) => handleNewTodo(event.preventDefault())}>
                    <input
                        type="text"
                        placeholder="Digite a tarefa..."
                        value={valueInput}
                        onChange={(event) => setValueInput(event.target.value)} 
                    />
                    <button className="buttonInclude" type="submit">Incluir</button>
                </form>    
            )
}