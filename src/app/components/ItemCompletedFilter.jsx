import React from 'react';

/*
 * some typecasting occurs in this module
 * I don't like this but do not want to mess with pure integers or strings too
*/
class ItemCompletedFilter extends React.Component{
    constructor(props) {
        this.state = {
            filterValue: props.filterValue
        }
    }

    handleChange(e) {
        this.setState({
            filterValue: e.target.value
        });

        // small conversion to boolean
        this.props.onFilterItems(e.target.value != 'all' ? e.target.value == 'true' : null);
    }

    render() {
        return (
            <select onChange={this.handleChange.bind(this)} defaultValue={this.state.filterValue}>
                <option value="all">Show all</option>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
            </select>
        );
    }
}

ItemCompletedFilter.propTypes = {
    onFilterItems: React.PropTypes.func.isRequired
}

export default ItemCompletedFilter;
