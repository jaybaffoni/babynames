import React from 'react';
import axios from 'axios';
import logo from './girl.png';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', submitter:''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmitterChange = this.handleSubmitterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name:event.target.value});
  }

  handleSubmitterChange(event) {
    this.setState({submitter:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.submitter);
    axios.post('https://baffoni-baby.herokuapp.com/entries', {
      name: this.state.name, submitter: this.state.submitter
    });

  }

  render() {
    return (
      <div>
      <form>
              <label>Suggested Name:</label>
              <br></br>
              <input type="text" 
                     name="name" 
                     value={this.state.name} 
                     onChange={this.handleNameChange} 
              />
              <br></br>
              <label>Submitted By:</label>
              <br></br>
              <input type="text" 
                     name="submitter" 
                     value={this.state.submitter} 
                     onChange={this.handleSubmitterChange} 
              />

          </form> 
      <button onClick={this.handleSubmit}> Submit </button>
      </div>
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
