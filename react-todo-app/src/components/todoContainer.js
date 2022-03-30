import React from "react"
import Header from "./header"
import TodosList from "./TodosList"
const handleChange = id => {
  this.setState({    todos: this.state.todos.map(todo => {      if (todo.id === id) {        todo.completed = !todo.completed;      }      return todo;    })  });};
const state = {
  todos: [
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    },
    {
      id: 4,
      title: "UAT to client",
      completed: false
    }
  ]
 };
class TodoContainer extends React.Component {
  
  render() {
    return (
      <div>
      <Header />     <TodosList todos={state.todos} handleChangeProps={handleChange} />
    </div>
    )
  }
}
export default TodoContainer