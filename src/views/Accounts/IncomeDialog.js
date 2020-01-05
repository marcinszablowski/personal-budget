import React, { Component } from 'react';
import { Button } from 'reactstrap';

class IncomeDialog extends Component {
  render() {
    let dialog = (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
    
    if (! this.props.IncomeisOpen) {
      dialog = null;
    }
    
    return (
    <div>
      {dialog}
    </div>
  )
  }
}

export default IncomeDialog;