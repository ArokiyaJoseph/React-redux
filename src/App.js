import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { myRoute } from "./routes";
import combineReducers from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

export class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const xStore = createStore(combineReducers, applyMiddleware(thunk));
        return ( <
            div >
            <
            Provider store = { xStore } >
            <
            Router > { myRoute } < /Router> <
            /Provider> <
            /div>
        );
    }
}

export default App;