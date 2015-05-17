const React = require('react');
const Card = require('./Card.jsx');

let Sample = React.createClass({
  propTypes: {
    app: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired
    })
  },

  getDefaultProps: function() {
    return {
      app: {
        title: 'Default'
      }
    }
  },

  getInitialState() {
    return {
      count: 0
    };
  },

  onClick() {
    this.setState({count: this.state.count + 1});
  },

  componentDidMount() {
  },

  render() {
    let card = this.state;
    return (
      <div>
        <p>Hello, {this.props.app.title}!</p>
        <Card card={card} />
        <div>{this.state.count}</div>
        <button onClick={this.onClick}>Click!</button>
      </div>
    );
  }
});

module.exports = Sample;
