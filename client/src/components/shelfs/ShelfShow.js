import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShelf } from '../../actions'
import Button from '@material-ui/core/button'

class ShelfShow extends React.Component {
    componentDidMount() {
        console.log("here");
        this.props.fetchShelf(this.props.match.params.id);
    }
    

    renderCreateProduct() {
        return (
            <div style={{ textAlign: 'right'}}>
                <Button variant="contained" color="primary">
                    <Link to="/shelfs/product/new">
                        Add Product
                    </Link>
                </Button>
                
            </div>
        )
    }
        
    render() {
        console.log(this.props);
        if (!this.props.shelf) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.shelf;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
                {this.renderCreateProduct()}
                <h6>Hey Now</h6>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
   
    return { shelf: state.shelfs.selectedShelf };
};

export default connect(mapStateToProps, { fetchShelf })(ShelfShow);