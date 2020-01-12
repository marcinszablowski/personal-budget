import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Form, Label, Input, FormGroup } from 'reactstrap';
import ExpenseDialog from '../ExpenseDialog';
import IncomeDialog from '../IncomeDialog';
import TransactionListItems from '../TransactionListItems'

class MainAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ExpenseisOpen: false,
      IncomeisOpen: false,
      balance: 0,
      transactions: [],
      newTransaction: {
        amount: "",
        category: "",
        description: "",
        date: "",
        key: ""
      },
    }

    // Bind "this" to constructor
    this.addIncome = this.addIncome.bind(this);
    this.handleIncomeAmount = this.handleIncomeAmount.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  // Guzik "Dodaj"
  addIncome(e) {
    e.preventDefault();

    // let updateBalance = this.state.balance + this.state.amount;

    console.log(`
    Amount: ${this.state.newTransaction.amount} 
    Category: ${this.state.newTransaction.category}
    Date: ${this.state.newTransaction.date}
    Description: ${this.state.newTransaction.description}
    `);

    const newTransaction = this.state.newTransaction;
    const newTransactions = [...this.state.transactions, newTransaction];

    this.setState({
      transactions: newTransactions,
      newTransaction: {
        amount: "",
        category: "",
        description: "",
        date: ""
      }
    })
  }

  handleIncomeAmount(e) {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        amount: e.target.value
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

  render() {
    return (
      <div className="animated fadeIn">
        {/* Nagłówek */}
        <h2>Konto główne</h2>
        <h4 className="mb-4">Saldo: <strong>3452,31zł</strong></h4>

        {/* Przyciski dodawania*/}
        <div className="mb-4 d-flex flex-row-reverse">
          <Button className="ml-2" color="danger" onClick={(e) => this.setState({ ExpenseisOpen: true, IncomeisOpen: false })}>
            <i className="fa fa-minus-circle fa-xs"></i> Dodaj wydatek
          </Button>

          <Button color="success" onClick={(e) => this.setState({ IncomeisOpen: true, ExpenseisOpen: false })}><i className="fa fa-plus-circle fa-xs"></i> Dodaj przychód</Button>
        </div>

        {/* Okno dodawania przychodów */}
        <IncomeDialog IncomeisOpen={this.state.IncomeisOpen}>
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
                      <option value="Wybierz kategorię">Wybierz kategorię</option>
                      <option value="Transport">Transport</option>
                      <option value="Jedzenie">Jedzenie</option>
                      <option value="Ubrania">Ubrania</option>
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
                      onClick={this.addIncome}>
                      Dodaj
                    </Button>

                    {/* Anuluj */}
                    <Button
                      outline color="danger"
                      onClick={(e) => this.setState({ IncomeisOpen: false })}>
                      Anuluj
                    </Button>
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </IncomeDialog>

        {/* Okno dodawania wydatków */}
        <ExpenseDialog ExpenseisOpen={this.state.ExpenseisOpen}>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <i className="fa fa-minus-circle fa-xs"></i> <strong>Nowy wydatek</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="amount">Kwota</Label>
                    <Input type="number" id="amount" placeholder="Wprowadź kwotę" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="category">Kategoria</Label>

                    <Input type="select" name="category" id="category">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="date">Data</Label>
                    <Input type="date" id="expense-date" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="description">Opis</Label>
                    <Input type="text" id="description" placeholder="Podaj opis" />
                  </FormGroup>

                  {/* Dodaj wydatek */}
                  <div className="float-right">
                    <Button outline
                      color="primary"
                      className="mr-1"
                      onClick={this.addIncome}
                    >
                      Dodaj
                    </Button>

                    <Button outline color="danger" onClick={(e) => this.setState({ ExpenseisOpen: false })}>Anuluj</Button>
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
                  <TransactionListItems transactions={this.state.transactions} />
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

