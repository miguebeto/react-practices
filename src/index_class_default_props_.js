import React, { Component } from 'react';//1
import ReactDOM from 'react-dom';

//2
class App extends Component {
  static defaultProps = {
    name: 'miguel',
  };
  render() {
    console.log(this.props);
    return <h1>Hola Mundo</h1>;
  }
}

ReactDOM.render(<App name={'marcela'}/>, document.getElementById('root'));//3
