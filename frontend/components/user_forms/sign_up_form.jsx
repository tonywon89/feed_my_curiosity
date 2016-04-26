var React = require('react');

var SignUpForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Satisfy Thy Curiosity" />
      </form>
    );
  }
});

module.exports = SignUpForm;
