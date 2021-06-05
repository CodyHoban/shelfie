import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShelfs } from '../../actions'
import shelfReducer from '../../reducers/shelfReducer';
import { _ } from 'lodash';
import shelfs from '../../apis/shelfs';
import Button from '@material-ui/core/button'

class ShelfList extends React.Component {
    componentDidMount() {
        this.props.fetchShelfs();
    }

    renderList() {
        return this.props.shelfs.shelfList.map(shelf => {

            return (
                <div className="item" key={shelf.id}>
                    <div className="right floated content">
                        <Button variant="contained" color="secondary"> 
                            <Link to={`/shelfs/edit/${shelf.id}`}>
                                Edit
                            </Link>
                        </Button>
                        <Button variant="contained" color="secondary">
                            <Link to={`/shelfs/delete/${shelf.id}`} className="">
                                Delete
                            </Link>
                        </Button>
                        
                    </div>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/shelfs/${shelf.id}`} className="header">
                           {shelf.shelfData.title}
                        </Link>
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
        shelfs: state.shelfs,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { fetchShelfs })(ShelfList);