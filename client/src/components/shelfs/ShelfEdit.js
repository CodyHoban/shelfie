import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchShelf, editShelf } from '../../actions'
import ShelfForm from './ShelfForm'

class ShelfEdit extends React.Component {
    componentDidMount() {
        this.props.fetchShelf(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editShelf(this.props.match.params.id, formValues)
    };

    render() {
        if (!this.props.shelf) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Shelf</h3>
                <ShelfForm 
                    initialValues ={_.pick(this.props.shelf, 'title', 'description')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { shelf: state.shelfs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchShelf, editShelf })(ShelfEdit);