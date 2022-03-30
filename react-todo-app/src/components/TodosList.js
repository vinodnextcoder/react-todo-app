import React from "react"

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li><input type="checkbox" /> {todo.title}</li>
          
        ))}
      </ul>
    )
  }
}

export default TodosList
