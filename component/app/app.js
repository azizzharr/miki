import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import People from "../people/people";
import {Provider} from "react-redux";
import store from "../store/store";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Link from "../link/link";


class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
            <Provider store={store}>
                <Route exact path={'/'}>
               <People/>
                </Route>
            </Provider>
                    <Route exact path={'/link'}>
                        <Link/>
                    </Route>
                </Switch>
        </Router>
        );
    }
}

export default App;