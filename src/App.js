import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryHome from "./components/CategoryHome";
import CategoryItem from "./components/CategoryItem";

export default function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={CategoryHome} />
         <Route path="/category/:id" component={CategoryItem} />
       </Switch>
    </Router>
  );
}
