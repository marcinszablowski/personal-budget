import React, { Component } from 'react';

class ExpenseDialog extends Component {
  render() {
    let dialog = (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
    
    if (! this.props.expenseIsOpen) {
      dialog = null;
    }
    
    return (
    <div>
      {dialog}
    </div>
  )
  }
}

export default ExpenseDialog;