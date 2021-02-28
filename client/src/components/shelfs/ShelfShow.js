import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShelf } from '../../actions'

class ShelfShow extends React.Component {
    componentDidMount() {
        this.props.fetchShelf(this.props.match.params.id);
    }

    renderCreateProduct() {
        if (this.props.isSignedIn) {
            <div style={{ textAlign: 'right'}}>
                <Link to="/shelfs/product/new" className="ui button primary">
                    Add Product
                </Link>
            </div>
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/shelfs/product/new" className="ui button primary">
                        Create Shelf
                    </Link>
                </div>
            )
        }
    }
        
    render() {
        if (!this.props.shelf) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.shelf;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { shelf: state.shelfs[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchShelf })(ShelfShow);