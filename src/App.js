import React from 'react';
import axios from 'axios';
import logo from './girl.png';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    let data = this.state.value;
    axios.post('https://baffoni-baby.herokuapp.com/entries', {
      // name: event.target.value
      name: data
    })
  }

  render() {
    return (
      <form style={{marginTop:'35px'}} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input style={{marginLeft:'10px'}} type="text" value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </label>
        <input value="Submit" />
      </form>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameForm />
      </header>
      
    </div>
  );
}

export default App;
