import React from 'react';

import TodoList from './TodoList.jsx';
import FormTodoItem from './FormTodoItem.jsx';

let styles = {
    todowidget: {
        width: '70%',
        minWidth: 200,
        margin: '0 auto',
        fontFamily: 'Ubuntu, sans-serif'
    }
};

class TodoWidget extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            items: props.items
        }
    }

    handleItemAdd(itemData) {
        var date = new Date();

        // add calculated fields
        itemData.dateCreated = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
        itemData.isCompleted = false;

        var data = this.state.items;
        data.push(itemData);

        this.setState({
            items: data
        });
    }

    handleItemRemove(itemIndex) {
console.log('remove');

        var data = this.state.items;
        data.splice(itemIndex, 1);

        this.setState({
            items: data
        });
    }

    handleClearCompleted() {
        var newItems = [];
console.log(this.state.items);
        this.state.items.forEach(function(item) {
            if (!item.isCompleted) {
                newItems.push(item);
            }
        });
console.log(newItems);
        this.setState({
            items: newItems
        });
    }

    render () {
        return (
            <div className="todoWidget">
                <TodoList items={this.state.items} onItemRemove={this.handleItemRemove.bind(this)} onClearCompleted={this.handleClearCompleted.bind(this)}  />
                <FormTodoItem onItemAdd={this.handleItemAdd.bind(this)} />
            </div>
        );
    }
}

export default TodoWidget;
