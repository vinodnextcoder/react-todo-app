import React from "react"
import Header from "./header"
import TodosList from "./TodosList"


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
      <Header />      <TodosList todos={state.todos} />
    </div>
    )
  }
}
export default TodoContainer