import "./style.css"

export default function TodoList({todos, handleTodo}){
    return (
            <ul className="container">
                {todos.map((el, index) => {
                    return (
                        <li key={index}>
                            <p className="task">{el}</p>
                            <button className="buttonChecked" onClick={() => handleTodo(el)}>Concluir</button>
                        </li>
                    )
                })}
            </ul>            
        )
}