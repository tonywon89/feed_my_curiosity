var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var Modal = require('react-modal');

var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require("./components/user_forms/login_form");
var SignUpForm = require("./components/user_forms/sign_up_form");

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Feed My Curiosity</h1>
        <SignUpForm />
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
