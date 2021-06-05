import React, { Component } from 'react'
import db from '../db'
import { Router, Route, Switch } from 'react-router-dom'
import ShelfCreate from './shelfs/ShelfCreate'
import ShelfEdit from './shelfs/ShelfEdit'
import ShelfDelete from './shelfs/ShelfDelete'
import ShelfList from './shelfs/ShelfList'
import ShelfShow from './shelfs/ShelfShow'
import ItemCreate from './products/ProductCreate'
import Header from './Header'
import history from '../history'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withTheme } from '@material-ui/core/styles'
import theme from '../theme'


class App extends React.Component {
    // componentWillMount(){
    //     let shelfCollection = db.collection('codyCollection').get().then((response) => {
    //         console.log(response.docs[0].name)
    //     });
    //     console.log(shelfCollection);
        
        /* Create reference to messages in Firebase Database */
        // let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        // messagesRef.on('child_added', snapshot => {
        //   /* Update React state when message is added at Firebase Database */
        //   let message = { text: snapshot.val(), id: snapshot.key };
        //   this.setState({ messages: [message].concat(this.state.messages) });
        // })
      //}
    //   addMessage(e){
    //     e.preventDefault(); // <- prevent form submit from reloading the page
    //     /* Send the message to Firebase */
    //     fire.database().ref('messages').push( this.inputEl.value );
    //     this.inputEl.value = ''; // <- clear the input
    //   }

      render() { 

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div  className="ui container">
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <Route path="/" exact component={ShelfList} />
                                <Route path="/shelfs/new" exact component={ShelfCreate} />
                                <Route path="/shelfs/edit/:id" exact component={ShelfEdit} />
                                <Route path="/shelfs/delete/:id" exact component={ShelfDelete} />
                                <Route path="/Shelfs/:id" exact component={ShelfShow} />
                                <Route path="/shelfs/product/new" exact component={ItemCreate} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
};

export default withTheme(App);
