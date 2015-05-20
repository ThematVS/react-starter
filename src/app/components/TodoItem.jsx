import React from 'react';

class TodoItem extends React.Component {
    handleClick(e) {
        e.preventDefault();

        this.props.onItemRemove();
    }

    render() {
        var className, completeStatus;

        if (this.props.item.isCompleted) {
            className = 'yes';
            completeStatus = 'yes';
        } else {
            className = 'no';
            completeStatus = 'no';
        }

        return (
            <tr className="item">
                <td>{this.props.item.name}</td>
                <td>{this.props.item.dateCreated}</td>
                <td>{this.props.item.dateDeliver}</td>
                <td className={className}>{completeStatus}</td>
                <td><a href="" onClick={this.handleClick.bind(this)}>X</a></td>
            </tr>
        );
    }
}

export default TodoItem;
