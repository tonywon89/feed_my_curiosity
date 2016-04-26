var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var Modal = require('react-modal');

var React = require('react');
var ReactDOM = require('react-dom');

var App = require("./components/app");
var UserStore = require("./stores/user_store");
// window.ErrorServerActions = require("./actions/error/error_server_actions");

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
