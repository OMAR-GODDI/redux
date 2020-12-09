import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, editTask  } from "../redux/actions";
import EditForm from "./EditForm";

const Todo = ({ todo, toggleTodo }) => (
  <div>
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
  <div>
    <EditForm oldTodo={todo} />
      </div>
      </div>
      
);
      

// export default Todo;
export default connect(
  null,
  { toggleTodo, editTask }
)(Todo);
