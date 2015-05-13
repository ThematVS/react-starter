import React from 'react';

// import Component from './components/Component.jsx';

let styles = {
    app: {
        width: '70%',
        minWidth: 200,
        margin: '0 auto',
        fontFamily: 'Ubuntu, sans-serif'
    },
    todolist: {
        color: 'red'
    }
};

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <TodoList items={todoItems} />
        );
    }
}

var TodoList = React.createClass({
    render: function() {
        var rows = [],
            itemCount;

        this.props.items.forEach(function(item) {
            rows.push(<TodoItem item={item} />);
        });

        itemCount = rows.length;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date Created</th>
                        <th>Date to Deliver</th>
                        <th>Is Completed</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Total items: {itemCount}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
});

var TodoItem  = React.createClass({
    render: function() {
        var className, text;

        if (this.props.item.isCompleted) {
            className = 'yes';
            text = 'yes';
        } else {
            className = 'no';
            text = 'no';
        }

        return (
            <tr className="item">
                <td>{this.props.item.name}</td>
                <td>{this.props.item.dateCreated}</td>
                <td>{this.props.item.dateDeliver}</td>
                <td className={className}>{text}</td>
            </tr>
        );
    }
});

var todoItems = [
    {name: 'Item 1', dateCreated: '2015-05-15', dateDeliver: '2015-05-25', isCompleted: false},
    {name: 'Item 2', dateCreated: '2015-05-09', dateDeliver: '2015-05-20', isCompleted: true},
    {name: 'Item 3', dateCreated: '2015-05-11', dateDeliver: '2015-05-18', isCompleted: false}
];


React.render(<App />, document.getElementById('content'));
