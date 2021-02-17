import React from 'react'
import { connect } from 'react-redux'
import { fetchShelf } from '../../actions'

class ShelfEdit extends React.Component {
    componentDidMount() {
        this.props.fetchShelf(this.props.match.params.id);
    }

    render() {
        if (!this.props.shelf) {
            return <div>Loading...</div>
        }
        return <div>{this.props.shelf.title}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { shelf: state.shelfs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchShelf })(ShelfEdit);