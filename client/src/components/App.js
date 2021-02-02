import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShelfCreate from './shelfs/ShelfCreate'
import ShelfEdit from './shelfs/ShelfEdit'
import ShelfDelete from './shelfs/ShelfDelete'
import ShelfList from './shelfs/ShelfList'
import ShelfShow from './shelfs/ShelfShow'
import Header from './Header'


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={ShelfList} />
                    <Route path="/shelfs/new" exact component={ShelfCreate} />
                    <Route path="/shelfs/edit" exact component={ShelfEdit} />
                    <Route path="/shelfs/delete" exact component={ShelfDelete} />
                    <Route path="/Shelfs/show" exact component={ShelfShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

// 1084791695338-in9uklh2crraiqh38rknm54ikm2b4n04.apps.googleusercontent.com   Client ID