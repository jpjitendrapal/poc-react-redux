import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives"component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>, document.getElementById('app'));


//IndexRoute injects component as child component
// Layout gets child router as props.children