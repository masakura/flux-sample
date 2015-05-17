const React = require('react');

let Card = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <p>Count: {this.props.card.count}</p>
    );
  }
});

module.exports = Card;
