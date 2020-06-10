import React from "react";
import Todo from "./Todo";
import './Todo.css';

const TodoList = props => {
  
  return (
    <div >
      {props.todo.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button  onClick={}>
        Clear Finished
      </button>
    </div>
  );
};

export default TodoList;
