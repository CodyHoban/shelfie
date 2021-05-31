import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { ThemeProvider } from '@material-ui/core/styles'

import App from './components/App'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    };

ReactDOM.render(
    <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </Provider>, 
    document.querySelector('#root')
);