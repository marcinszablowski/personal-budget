import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row, ListGroup, Label, Input } from 'reactstrap';
import ExpenseDialog from '../ExpenseDialog';
import IncomeDialog from '../IncomeDialog';
import TransactionListItems from '../TransactionListItems';

class MainAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenseIsOpen: false,
      incomeIsOpen: false,
      balance: JSON.parse(localStorage.getItem("balance")),
      transactions: JSON.parse(localStorage.getItem("transactions")),
      itemKey: 0,
      newTransaction: {
        amount: "",
        category: "",
        description: "",
        date: "",
        key: ""
      }
    }

    // Bind "this" to constructor
    this.addTransaction = this.addTransaction.bind(this);
    this.handleIncomeAmount = this.handleIncomeAmount.bind(this);
    this.handleExpenseAmount = this.handleExpenseAmount.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDescription = this.handleDescription.bind(this);

    if (localStorage.getItem("transactions") === null) {
      localStorage.setItem("transactions", "[]");
    };
    if (localStorage.getItem("balance") === null) {
      localStorage.setItem("balance", "0");
    };
  }


  // Guzik "Dodaj"
  addTransaction(e) {
    e.preventDefault();

    const newTransaction = this.state.newTransaction;
    const newTransactions = [newTransaction, ...this.state.transactions];
    const newBalance = parseInt(this.state.balance) + parseInt(this.state.newTransaction.amount);
    const itemKey = JSON.parse(localStorage.getItem("transactions")) === null ? 0 : (JSON.parse(localStorage.getItem("transactions")).length);

    this.setState({
      transactions: newTransactions,
      balance: newBalance,
      newTransaction: {
        amount: "",
        category: "",
        description: "",
        date: "",
        key: itemKey,
      },
      incomeIsOpen: false,
      expenseIsOpen: false
    })

    // Local storage
    localStorage.setItem("transactions", JSON.stringify(newTransactions));

    localStorage.setItem("balance", JSON.stringify(newBalance));

  }

  handleIncomeAmount(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        amount: (e.target.value > 0 ? e.target.value : 0)
      }
    })
  }

  handleExpenseAmount(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        amount: -(e.target.value > 0 ? e.target.value : 0)
      }
    })
  }

  handleCategory(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        category: e.target.value
      }
    })
  }

  handleDate(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        date: e.target.value
      }
    })
  }

  handleDescription(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        description: e.target.value
      }
    })
  }

  getBalance() {
    const balance = localStorage.getItem("balance");
    if (balance === null) {
      return 0;
    }
    else {
      return balance;
    }
  }

  reloadData() {
      this.setState({
        balance: JSON.parse(localStorage.getItem("balance")),
      transactions: JSON.parse(localStorage.getItem("transactions"))
      })
  }


  render() {

    return (
      <div className="animated fadeIn">
        {/* Nagłówek */}
        <h2>Moje konto</h2>
        <h4 className="mb-4">Saldo: <strong>{this.getBalance()} zł</strong></h4>

        {/* Przyciski dodawania*/}
        <div className="mb-4 d-flex flex-row-reverse">
          <Button className="ml-2" color="danger" onClick={(e) => this.setState({ expenseIsOpen: true, incomeIsOpen: false })}>
            <i className="fa fa-minus-circle fa-xs"></i> Dodaj wydatek
          </Button>

          <Button color="success" onClick={(e) => this.setState({ incomeIsOpen: true, expenseIsOpen: false })}><i className="fa fa-plus-circle fa-xs"></i> Dodaj przychód</Button>
        </div>

        {/* Okno dodawania przychodów */}
        <IncomeDialog incomeIsOpen={this.state.incomeIsOpen}>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <i className="fa fa-plus-circle fa-xs"></i> <strong>Nowy przychód</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="amount">Kwota</Label>
                    <Input type="number" id="amount" placeholder="Wprowadź kwotę" value={this.state.amount}
                      onChange={this.handleIncomeAmount} />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="category">Kategoria</Label>

                    <Input type="select" name="category" id="category" value={this.state.category}
                      onChange={this.handleCategory} >
                      <option value="" hidden>Wybierz kategorię</option>
                      <option value="Wynagrodzenie">Wynagrodzenie</option>
                      <option value="Premia">Premia</option>
                      <option value="Sprzedaż">Sprzedaż</option>
                      <option value="Zwrot podatku">Zwrot podatku</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="date">Data</Label>
                    <Input type="date" id="income-date" value={this.state.date} onChange={this.handleDate} />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="description">Opis</Label>
                    <Input type="text" id="description" placeholder="Podaj opis" value={this.state.description} onChange={this.handleDescription} />
                  </FormGroup>

                  <div className="float-right">
                    {/* Dodaj przychód */}
                    <Button
                      outline color="primary"
                      className="mr-1"
                      onClick={this.addTransaction}>
                      Dodaj
                    </Button>

                    {/* Anuluj */}
                    <Button
                      outline color="danger"
                      onClick={(e) => this.setState({ incomeIsOpen: false })}>
                      Anuluj
                    </Button>
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </IncomeDialog>

        {/* Okno dodawania wydatków */}
        <ExpenseDialog expenseIsOpen={this.state.expenseIsOpen}>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <i className="fa fa-minus-circle fa-xs"></i> <strong>Nowy wydatek</strong>
                </CardHeader>
                <CardBody>

                  <FormGroup>
                    <Label htmlFor="amount">Kwota</Label>
                    <Input type="number" id="amount" placeholder="Wprowadź kwotę" value={this.state.amount}
                      onChange={this.handleExpenseAmount} />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="category">Kategoria</Label>
                    <Input type="select" name="category" id="category" value={this.state.category}
                      onChange={this.handleCategory}>
                      <option value="" hidden>Wybierz kategorię</option>
                      <option value="Transport">Transport</option>
                      <option value="Zakupy">Zakupy</option>
                      <option value="Ubrania">Ubrania</option>
                      <option value="Subskrypcje">Subskrypcje</option>
                      <option value="Sport">Sport</option>
                      <option value="Zakupy">Zakupy</option>
                      <option value="Czynsz">Czynsz</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="date">Data</Label>
                    <Input type="date" id="expense-date" value={this.state.date} onChange={this.handleDate} />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="description">Opis</Label>
                    <Input type="text" id="description" placeholder="Podaj opis" value={this.state.description} onChange={this.handleDescription} />
                  </FormGroup>

                  {/* Dodaj wydatek */}
                  <div className="float-right">
                    <Button outline
                      color="primary"
                      className="mr-1"
                      onClick={this.addTransaction}
                    >
                      Dodaj
                    </Button>

                    <Button outline color="danger" onClick={(e) => this.setState({ expenseIsOpen: false })}>Anuluj</Button>
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </ExpenseDialog>

        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <strong>Transakcje</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <TransactionListItems transactions={this.state.transactions} onDelete={() => this.reloadData()}/>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainAccount;

