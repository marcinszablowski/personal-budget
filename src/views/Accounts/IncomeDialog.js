import React, { Component } from 'react';

class IncomeDialog extends Component {
  render() {
    let dialog = (
      <div>
        <div>{this.props.children}</div>
      </div>
    )

    if (!this.props.incomeIsOpen) {
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