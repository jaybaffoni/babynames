import React, { Component } from 'react';

class NameRow extends Component {
    
    constructor(props){
        super(props);
        this.state = {key: this.props.k, obj: this.props.obj};
    }
    
    render() {
        var obj = this.state.obj;
        return (
            <div className="login-card col-md-6" style={{marginTop:20}}>
                <h4 style={{color:'black'}}>{obj.name}</h4>
                <h4 style={{color:'grey'}}>- {obj.submitter}</h4>
            </div>
    );
  }
}

export default NameRow;