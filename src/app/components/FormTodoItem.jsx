import React from 'react';

class FormTodoItem extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        var itemName = React.findDOMNode(this.refs.itemName).value.trim(),
            dateDeliver = React.findDOMNode(this.refs.dateDeliver).value.trim();

        if (!itemName || !dateDeliver) {
            return;
        }

        this.props.onItemAdd({
            name: itemName,
            dateDeliver: dateDeliver
        });

        React.findDOMNode(this.refs.itemName).value = '';
        React.findDOMNode(this.refs.dateDeliver).value = '';

        return;
    }

    render() {
        return (
            <div>
                <h2>Add item form</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Item name" ref="itemName" /><br />
                    <input type="text" placeholder="Deliver date" ref="dateDeliver" /><br />
                    <input type="submit" value="Add item" />
                </form>
            </div>
        );
    }
}

FormTodoItem.propTypes = {
    onItemAdd: React.PropTypes.func.isRequired
}


export default FormTodoItem;
