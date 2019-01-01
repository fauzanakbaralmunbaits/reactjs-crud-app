import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title : 'React Simple Crud Aplication',
      act:0,
      index:'',
      datas:[]
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.prefentDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.values;
    let address = this.refs.address.values;

    let data = {
      name, address
    }
    datas.push(data);

    this.setState({
      datas:datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Your Name" className="formField" />
          <input type="text" ref="address" placeholder="Your Address" className="formField" />
          <button onClick={this.fSubmit} className="myButton">Submit</button>
        </form>
        <pre>
          
        </pre>
      </div>
    );
  }
}

export default App;
