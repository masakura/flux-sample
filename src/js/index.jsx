const React = require('react');
const Sample = require('./components/Sample.jsx');

var app = {
  title: 'React'
};

var component = React.render(<Sample app={app} />, document.getElementById('main'));

component.setProps({app: {title: 'New Title'}});
