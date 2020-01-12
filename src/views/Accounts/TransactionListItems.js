import React, { Component } from 'react';
import { Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class TransactionItemList extends Component {

  render() {
    const transactions = this.props.transactions;
    console.log(transactions);
    const transactionList = transactions.map(transaction => {
      return (
        <>
          <ListGroupItem action>
            <ListGroupItemHeading>
              {transaction.category}
              <span className="float-right">{transaction.amount} zł</span>
            </ListGroupItemHeading>

            <ListGroupItemText>
              {transaction.description}
              <span className="float-right">{transaction.date}</span>
            </ListGroupItemText>

            <Button color="danger" className="float-right ml-1" outline>Usuń</Button>
            <Button color="warning" className="float-right" outline>Edytuj</Button>
          </ListGroupItem>
        </>
      )
    });


    return (
      <>
        {transactionList}
      </>
    )
  }
}

export default TransactionItemList;