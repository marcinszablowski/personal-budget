import React, { Component } from 'react';
import { Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class TransactionItemList extends Component {

  deleteItem(index) {

    return () => {
      let balance = JSON.parse(localStorage.getItem("balance"));
      const allItems = JSON.parse(localStorage.getItem("transactions"));

      // Aktualizacja stanu konta
      balance -= allItems[index].amount;
      localStorage.setItem("balance", balance);

      // Usunięcie elementu z tablicy
      allItems.splice(index, 1);
      localStorage.setItem("transactions", JSON.stringify(allItems));
      
      this.props.onDelete();
    }
  }

  render() {
    const transactions = this.props.transactions;
    // const key = this.props.key
    
    const transactionList = transactions.map((transaction, index) => {
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

            <Button
              color="danger"
              className="float-right ml-1"
              onClick={this.deleteItem(index)}
              outline>
              Usuń
              </Button>
            {/* <Button color="warning" className="float-right" outline>Edytuj</Button> */}
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