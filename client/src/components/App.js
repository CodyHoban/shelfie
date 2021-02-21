import React from 'react'
import { Router, Route } from 'react-router-dom'
import ShelfCreate from './shelfs/ShelfCreate'
import ShelfEdit from './shelfs/ShelfEdit'
import ShelfDelete from './shelfs/ShelfDelete'
import ShelfList from './shelfs/ShelfList'
import ShelfShow from './shelfs/ShelfShow'
import Header from './Header'
import history from '../history'


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={ShelfList} />
                    <Route path="/shelfs/new" exact component={ShelfCreate} />
                    <Route path="/shelfs/edit/:id" exact component={ShelfEdit} />
                    <Route path="/shelfs/delete/:id" exact component={ShelfDelete} />
                    <Route path="/Shelfs/show" exact component={ShelfShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;
