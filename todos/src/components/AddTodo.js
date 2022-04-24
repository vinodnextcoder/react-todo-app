import React from 'react';
import { connect } from 'react-redux';

// UUID is a library for generating a unique id
import uuidv1 from "uuid";

import { addTodo } from '../actions';
import '../asset/index.css'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => dispatch(addTodo(todo))
    }
}

// Form component for adding new todo, dispatches addTodo with a todo object
const AddTodo = ({onSubmit}) => {
    let input;

    return (
        <div>
            <form 
                onSubmit={e => { 
                        e.preventDefault();
                        const id = uuidv1();
                        if(input.value.trim()) {
                            onSubmit({
                                id,
                                text: input.value,
                                completed: false
                            });
                            input.value = '';
                        } 
                    }}
                className="outer-wrapper row"
            >
                <div className="col padding-right-small">
                    <input type="text" placeholder="Add new task" className='click' ref={node => { input = node }} />
                </div>
                <div className="col padding-left-small">
                    <input type="submit" value="Add task" className="click btn-small" />
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTodo);