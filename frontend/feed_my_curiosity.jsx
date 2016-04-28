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
var FeedIndex = require("./components/feeds/feed_index");

window.CollectionApiUtil = require("./util/collection_api_util");

var routes = (
  <Route path="/" component={App}>
    <Route path="feeds" component = {FeedIndex} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
