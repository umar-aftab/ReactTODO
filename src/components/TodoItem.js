import React, { Component } from "react";
import PropTypes from "prop-types";
import Todos from "./Todos";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through",
        backgroundColor: "#f4f5f6",
        padding: "10px",
        borderBottom: "1px #ccc dotted"
      };
    } else {
      return {
        textDecoration: "none",
        backgroundColor: "#f4f9f9",
        padding: "10px",
        borderBottom: "1px #ddd dotted"
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  float: "right"
};
export default TodoItem;
