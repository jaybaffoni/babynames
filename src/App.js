import React from 'react';
import axios from 'axios';
import logo from './girl.png';
import NameRow from './NameRow';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', submitter:'', approved:[], rejected:[]};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmitterChange = this.handleSubmitterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getApproved = this.getApproved.bind(this);
    this.getRejected = this.getRejected.bind(this);
    this.approvedRows = this.approvedRows.bind(this);
    this.rejectedRows = this.rejectedRows.bind(this);

    this.getApproved();
    this.getRejected();
  }

  getApproved(){
    axios.get('https://baffoni-baby.herokuapp.com/entries/approved')
          .then((response) => {
                this.setState({approved: response.data});
            })
          .catch((error) => {
            console.log(error);
          });
  }

  getRejected(){
    axios.get('https://baffoni-baby.herokuapp.com/entries/rejected')
          .then((response) => {
                this.setState({rejected: response.data});
            })
          .catch((error) => {
            console.log(error);
          });
  }

  approvedRows(){
    return this.state.approved.map((object, i) => {
      return(
              <NameRow key={i} obj={object} k={object.id} />
          )
      
    })
  }

  rejectedRows(){
    return this.state.rejected.map((object, i) => {
      return(
              <NameRow key={i} obj={object} k={object.id} />
          )
      
    })
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
    }).then((response) => {
      this.getApproved();
      this.getRejected();
    });

    this.setState({name: '', submitter:''});

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
        <button style={{marginTop: '20px'}}onClick={this.handleSubmit}> Submit </button>
        <br></br><br></br>
        <label>Approved Names:</label>
        <div className="row">
            {this.approvedRows()}
        </div>
        <br></br>
        <label>Rejected Names:</label>
        <div className="row">
            {this.rejectedRows()}
        </div>
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
