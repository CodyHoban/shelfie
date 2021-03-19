import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchShelf, editShelf } from '../../actions'

class ErrorShow extends React.Component {
    

    // componentDidMount() {
    //     this.props.fetchShelf(this.props.match.params.id)
    // }

    renderActions() {
        return (
            <React.Fragment>
                <Link to="/" className="ui button">return home</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        let errorMessage =  '';
        if (!errorMessage) {
            return 'Please return home'
        }

        // return this.setState({errorMessage: err.message});
    }

    render() {
        console.log(this.props);
        console.log('this is the new one')
        return (
            <Modal 
                title="Error Screen"
                content={this.props.errorMessage}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return { shelf: state.shelfs[ownProps.match.params.id] }
// };

export default (ErrorShow);