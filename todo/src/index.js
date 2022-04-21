import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h1 class="hdd">TODO</h1>

                <br />
                <TodoList items= { this.state.items}/>
                <form onSubmit={this.handleSubmit}>
               
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                   <br />
                   <br />
                    <button style={{ backgroundImage: 'linear-gradient(#f67a36,#ed008c)' }}>
                        Add Task {this.state.items.length + 1}
                   
                    </button>
    
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}


// ========================================

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
