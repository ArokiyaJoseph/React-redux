import { Switch, Route } from "react-router";
import React from "react";
import Form from "./form";
import Display from "./display";

export const myRoute = ( <
    Switch >
    <
    Route path = "/"
    exact component = { Form }
    /> <
    Route path = "/display"
    component = { Display }
    /> <
    /Switch>
);

export default myRoute;