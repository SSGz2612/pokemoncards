import React from "react";
import App from "../App";
import Pokemon from "./Pokemon";
//browser
import { Switch, Route } from "react-router-dom";

const Router = () => (
    <Switch>
        <Route path="/pokemon/:id"><Pokemon/></Route>
        <Route exact path="/"><App/></Route>
    </Switch>
)

export default Router;