const React = require('react');

let Card = React.createClass({
  propTypes: {
    onIncrement: React.PropTypes.func.isRequired,
    onReset: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
    console.log('DidMount');
  },

  componentWillMount() {
    console.log('WillMount');
  },

  onClick() {
    this.props.onIncrement();
  },

  reset() {
    this.props.onReset();
  },

  render() {
    return (
      <div>
        <p>Count: {this.props.card.count}</p>
        <button type="button" onClick={this.onClick}>Click! (Child)</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
});

module.exports = Card;
