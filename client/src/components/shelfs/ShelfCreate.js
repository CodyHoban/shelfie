import React from 'react'
import { connect } from 'react-redux'
import { createShelf } from '../../actions'
import ShelfForm from './ShelfForm'

// start here with updates for css


class ShelfCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createShelf(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Shelf</h3>
                <ShelfForm onSubmit={this.onSubmit} />
            </div>
            
        );
    }
};

export default connect(null, { createShelf })(ShelfCreate);