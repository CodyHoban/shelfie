import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class ErrorShow extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchShelf(this.props.match.params.id)
    // }
    homePush() {
        console.log(this.props)
        console.log('check these props')
        this.props.errorToggle();
        history.push('/')
    }

    renderActions() {
        return (
            // <React.Fragment>
            //     <Link to="/" className="ui button">Return Home</Link>
            // </React.Fragment>
            <button onClick={() => this.homePush()}>Return Home</button>
        );
    }

    renderContent() {
        let errorMessage =  '';
        if (!errorMessage) {
            return 'Please return home'
        }

        // return this.setState({errorMessage: err.message});
    }

    errorToggle() {
        this.props.errorToggle()
    }

    render() {
        return (
            <Modal 
                title="Error Screen"
                content={this.props.errorMessage}
                actions={
                    this.renderActions()
                    
                }
                onDismiss={() => this.errorToggle()}
            />
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return { shelf: state.shelfs[ownProps.match.params.id] }
// };

export default (ErrorShow);