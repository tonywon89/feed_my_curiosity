var React = require('react');

var LoginForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password" />
      </form>
    );
  }
});

module.exports = LoginForm;
