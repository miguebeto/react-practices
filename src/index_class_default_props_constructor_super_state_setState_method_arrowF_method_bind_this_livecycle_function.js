import React, { Component, useState, useEffect } from 'react'; //1
import ReactDOM from 'react-dom';

//similar componentDidUpdate
const Example = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log('Fuí Actualizado');
  });

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
    </>
  );
};

// similar componentDidMount
// const Example = () => {
//   const [contador, setContador] = useState(0);
//   useEffect(() => {
//     console.log('Fuí Montado');
//   },[]);

//   return( <>
//     <h1>Contador: {contador}</h1>
//     <button onClick={()=> setContador(contador + 1)}>Sumar 1</button>
//   </>
//   )
// };

// similar componentWillMount
// const Example = () => {
//   const [contador, setContador] = useState(0);
//   useEffect(() => {
//     console.log('Fuí Montado');
//     return()=>{
//       alert('Bye')
//     }
//   });

//   return( <>
//     <h1>Contador: {contador}</h1>
//     <button onClick={()=> setContador(contador + 1)}>Sumar 1</button>
//   </>
//   )
// };

//2
class App extends Component {
  //3
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      atDate: null,
    };
  }
  static defaultProps = {
    name: 'miguel',
  };
  //6
  componentDidMount() {
    console.log('Fuí Creado');
  }
  //7
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevState.contador !== this.state.contador)
      this.setState({ atDate: new Date() });

    console.log('Fuí Actualizado');
  }
  //8
  componentWillMount() {
    console.log('Bye');
  }

  updateCounter = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    console.log(this.props);
    console.log(this.state.contador);
    //4
    return (
      <>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.updateCounter}>Sumar 1</button>
      </>
    );
  }
}

ReactDOM.render(<Example name={2} />, document.getElementById('root'));
