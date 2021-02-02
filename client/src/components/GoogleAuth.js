import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1084791695338-in9uklh2crraiqh38rknm54ikm2b4n04.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;