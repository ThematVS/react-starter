import React from 'react';

import TodoItem from './TodoItem.jsx';
import TodoListHeader from './TodoListHeader.jsx';
import TodoListFooter from './TodoListFooter.jsx';

class TodoList extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
            filterCompletedValue: null
        }
    }

    handleClick(itemIndex) {
        this.props.onItemRemove(itemIndex);
    }

    handleFilterCompleted(completedValue) {
        this.setState({
            filterCompletedValue: completedValue
        });
    }

    render() {
        var rows = [],
            i = 0,
            self = this;

        this.props.items.forEach(function(item) {
            if (self.state.filterCompletedValue !== null) {
                if (item.isCompleted === self.state.filterCompletedValue) {
                    rows.push(<TodoItem item={item} key={i} onItemRemove={self.handleClick.bind(self, i)} />);
                }
            } else {
                rows.push(<TodoItem item={item} key={i} onItemRemove={self.handleClick.bind(self, i)} />);
            }
            i++;
        });

        return (
            <table>
                <TodoListHeader onFilterCompleted={this.handleFilterCompleted.bind(this)}/>
                <tbody>{rows}</tbody>
                <TodoListFooter items={this.props.items} onClearCompleted={this.props.onClearCompleted} />
            </table>
        );
    }
}

export default TodoList;
