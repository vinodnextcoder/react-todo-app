import React, { Component } from 'react';
import styled from 'styled-components';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Container = styled.div`
  background-color: #7da4f2;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 480px !important;
  background-color: #ff1a8c;
`;

// Main app structure
class App extends Component {
  render() {
    return (
      <Container className="row flex-center flex-middle">
        <Paper className="border border-primary padding-large margin-large no-responsive">
          <h3 className="margin-small">Todo List</h3>
          <AddTodo />
          <TodoList />
        </Paper>
      </Container>      
    );
  }
}

export default App;
