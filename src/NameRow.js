import React, { Component } from 'react';

class NameRow extends Component {
    
    constructor(props){
        super(props);
        this.state = {key: this.props.k, obj: this.props.obj};
    }
    
    render() {
        var obj = this.state.obj;
        return (
            <div className="login-card col-lg-12" style={{marginTop:20}}>
                <h4 style={{color:'black', overflowWrap:'break-word'}}>{obj.name}</h4>
                <h4 style={{color:'grey', overflowWrap:'break-word'}}>- {obj.submitter}</h4>
            </div>
    );
  }
}

export default NameRow;