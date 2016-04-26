var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Feed My Curiosity</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
