import React from 'react';

import ItemCompletedFilter from './ItemCompletedFilter.jsx';

class TodoListHeader extends React.Component{
    constructor (props) {
        super(props);

        // show string header by default
        this.state = {
            filterActive: false,
            filterValue: 'all'
        }
    }

    handleClick(e) {
        // show filter dropdown
        this.setState({
            filterActive: true
        });
    }

    handleFiltered(completedValue) {
        // hide filter dropdown
        this.setState({
            filterActive: false,
            filterValue: completedValue
        });

        this.props.onFilterCompleted(completedValue);
    }

    render() {
        var completeHeader = this.state.filterActive ? <ItemCompletedFilter filterValue={this.state.filterValue} onFilterItems={this.handleFiltered.bind(this)} /> : 'Is Completed';

        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th>Date to Deliver</th>
                    <th onClick={this.handleClick.bind(this)}>{completeHeader}</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}

export default TodoListHeader;
