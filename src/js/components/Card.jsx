const React = require('react');

let Card = React.createClass({
  propTypes: {
    onIncrement: React.PropTypes.func.isRequired,
    onReset: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      text: ''
    };
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

  changeText(e) {
    this.setState({text: e.target.value});
  },

  render() {
    return (
      <div>
        <p>Count: {this.props.card.count}</p>
        <p>Text: {this.state.text}</p>
        <button type="button" onClick={this.onClick}>Click! (Child)</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <input type="text" value={this.state.text} onChange={this.changeText} />
      </div>
    );
  }
});

module.exports = Card;
