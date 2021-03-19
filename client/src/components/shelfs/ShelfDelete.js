import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchShelf, deleteShelf } from '../../actions'

class ShelfDelete extends React.Component {
    componentDidMount() {
        this.props.fetchShelf(this.props.match.params.id)
        console.log(this.props);
        console.log('right ere');
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteShelf(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.shelf) {
            return 'Are you sure you want to delete this shelf?'
        }

        return `Are you sure you want to delte the shelf with title: ${this.props.shelf.title}`
    }

    render() {
        return (
            <Modal 
                title="Delete Shelf"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { shelf: state.shelfs[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchShelf, deleteShelf })(ShelfDelete);