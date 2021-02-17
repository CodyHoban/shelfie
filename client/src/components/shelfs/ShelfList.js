import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShelfs } from '../../actions'
import shelfReducer from '../../reducers/shelfReducer';
import { _ } from 'lodash';

class ShelfList extends React.Component {
    componentDidMount() {
        this.props.fetchShelfs();
    }

    renderAdmin(shelf) {
        if (shelf.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/shelfs/edit/${shelf.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderList() {
        return this.props.shelfs.map(shelf => {
            return (
                <div className="item" key={shelf.id}>
                    {this.renderAdmin(shelf)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {shelf.title}
                        <div className="description">{shelf.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/shelfs/new" className="ui button primary">
                        Create Shelf
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Shelfs</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return { 
        shelfs: Object.values(state.shelfs),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { fetchShelfs })(ShelfList);