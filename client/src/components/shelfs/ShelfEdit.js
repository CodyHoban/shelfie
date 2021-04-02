import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchShelf, editShelf, toggleErrorState } from '../../actions'
import ShelfForm from './ShelfForm'
import ErrorShow from './ErrorShow'

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
        console.log(this.props);
        return (
            <div>
                <h3>Edit a Shelf</h3>
                <ShelfForm 
                    //initialValues={_.pick(this.props.shelf, 'title', 'description')}
                    title={this.props.shelf.title}
                    description={this.props.shelf.description}
                    onSubmit={this.onSubmit} 
                />
                { 
                this.props.errorState && <ErrorShow
                    errorMessage={this.props.shelfErrorMessage}
                    errorToggle={this.props.toggleErrorState}
                />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        shelf: state.shelfs.selectedShelf,
        errorState: state.shelfs.shelfError,
        shelfErrorMessage: state.shelfs.shelfErrorMessage
     };
}

export default connect(mapStateToProps, { fetchShelf, editShelf, toggleErrorState  })(ShelfEdit);