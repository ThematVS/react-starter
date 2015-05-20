import React from 'react';

class TodoListFooter extends React.Component{
    handleClick(e) {
        this.props.onClearCompleted();
    }

    render() {
        var itemTotalCount = 0,
            itemCompletedCount = 0;

        this.props.items.forEach(function(item) {
            if (item.isCompleted) {
                itemCompletedCount++;
            }
        });

        itemTotalCount = this.props.items.length;

        return (
            <tfoot>
                <tr>
                    <td colSpan="2">Total items: {itemTotalCount}</td>
                    <td colSpan="2">Completed items: {itemCompletedCount}</td>
                    <td colSpan="2"><button onClick={this.handleClick.bind(this)}>Clear completed</button></td>
                </tr>
            </tfoot>
        );
    }
}

export default TodoListFooter;
