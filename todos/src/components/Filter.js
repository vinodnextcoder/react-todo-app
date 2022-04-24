import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setFilter } from '../actions';

// Change filter state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value))
    }
}

const Dropdown = styled.div`
    margin: 3em 0 0 0;
`;

// Component to change between filters and also clear from localStorage
const Filter = ({todosLength, filter, onChangeFilter, onClickClear}) => {
    return (
        <Dropdown className="row flex-edges">
        </Dropdown>        
    );
}

export default connect(null, mapDispatchToProps)(Filter);

