const React = require('react');

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
    return (
      <div>
        <p>Hello, {this.props.app.title}!</p>
        <div>{this.state.count}</div>
        <button onClick={this.onClick}>Click!</button>
      </div>
    );
  }
});

module.exports = Sample;
