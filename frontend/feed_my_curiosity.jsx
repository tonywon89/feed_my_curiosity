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
var Home = require("./components/home");
var FeedIndex = require("./components/feeds/feed_index");
var CollectionIndex = require("./components/collections/collection_index");
var CollectionDetail = require("./components/collections/collection_detail");
var FeedDetail = require("./components/feeds/feed_detail");
var SavedArticleIndex = require("./components/saved_articles/saved_article_index");

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="feeds" component={FeedIndex} />
    <Route path="collections" component={CollectionIndex} />
    <Route path="collections/:collectionId" component={CollectionDetail}/>
    <Route path="feeds/:feedId" component={FeedDetail} />
    <Route path="saved_articles" component={SavedArticleIndex} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
