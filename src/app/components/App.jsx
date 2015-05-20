import React from 'react';

import TodoWidget from './TodoWidget.jsx';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <TodoWidget items={todoItems} />
        );
    }
}


var todoItems = [
    {name: 'Item 1', dateCreated: '2015-05-15', dateDeliver: '2015-05-25', isCompleted: false},
    {name: 'Item 2', dateCreated: '2015-05-09', dateDeliver: '2015-05-20', isCompleted: true},
    {name: 'Item 3', dateCreated: '2015-05-11', dateDeliver: '2015-05-18', isCompleted: false}
];

React.render(<App />, document.getElementById('content'));
