const React = require('react');
const Sample = require('./components/Sample.jsx');

var app = {
  title: 'React'
};

React.render(<Sample app={app} />, document.getElementById('main'));
