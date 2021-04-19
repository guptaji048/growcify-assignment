import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryHome from "./components/CategoryHome";
import CategoryItem from "./components/CategoryItem";
import { CategoryProvider } from "./contexts/CategoryContext";

export default function App() {
  return (
    <Router>
      <CategoryProvider>
        <Switch>
          <Route exact path="/" component={CategoryHome} />
          <Route path="/category/:id" component={CategoryItem} />
        </Switch>
      </CategoryProvider>
    </Router>
  );
}
