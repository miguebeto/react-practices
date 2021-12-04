import React, { Component } from 'react';//1
import ReactDOM from 'react-dom';

//2
class App extends Component {
  //3
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }
  }
  static defaultProps = {
    name: 'miguel',
  };
  render() {
    console.log(this.props);
    console.log(this.state.contador);
    //4
    return(
      <>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={()=> this.setState({contador: this.state.contador + 1})}>Sumar 1</button>
      </>
    )
  }
}
//5
ReactDOM.render(<App  name={2}/>, document.getElementById('root'));
