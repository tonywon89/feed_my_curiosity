var React = require('react');

var LoginForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In and Feed" />
      </form>
    );
  }
});

module.exports = LoginForm;
