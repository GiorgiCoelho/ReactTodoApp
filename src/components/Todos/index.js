import React, { useState } from "react";
import classes from "./styles.module.css";
import Todo from "./Todo";
import DateBR from "./../DateBR";

const Todos = props => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function toogleTodosHandler(id) {
    let todoChoosen = todos.filter(todo => todo.id === id)[0];
    todoChoosen.isDone = !todoChoosen.isDone;
    const newArray = [...todos];
    newArray[id - 1] = todoChoosen;

    setTodos(newArray);
  }

  function addTodoHandler() {
    const lastTodo = todos.slice(-1)[0] != null ? todos.slice(-1)[0].id : 0;

    let nt = {
      description: newTodo,
      id: lastTodo + 1,
      isDone: false
    };

    nt = [...todos, nt];

    setNewTodo("");
    setTodos(nt);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  }

  return (
    <div className={classes.TodoCard}>
      <div className={classes.CardHeader}>
        <DateBR />
      </div>
      <div className={classes.CardBody}>
        {todos.map(todo => {
          return (
            <div className={classes.CardBodyWrapper} key={todo.id}>
              <Todo
                id={todo.id}
                description={todo.description}
                isToogled={todo.isDone}
                toogle={() => toogleTodosHandler(todo.id)}
              />
            </div>
          );
        })}
      </div>
      <div style={{ width: "100%", padding: 10 }}>
        <input
          value={newTodo}
          style={{
            width: "80%",
            border: "none",
            borderBottom: "1px solid #d4d4d4"
          }}
          placeholder="Escreva aqui o que você tem que fazer hoje..."
          type="text"
          onChange={e => {
            e.preventDefault();
            setNewTodo(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
      </div>

      <button onClick={addTodoHandler} className={classes.CardButton}>
        +
      </button>
    </div>
  );
};

export default Todos;
