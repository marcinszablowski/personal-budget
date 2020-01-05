import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Form, Label, Input, FormGroup } from 'reactstrap';
import ExpenseDialog from '../ExpenseDialog';
import IncomeDialog from '../IncomeDialog';

//  (e) => this.setState=({isOpen: true})

class MainAccount extends Component {

  state = {
    ExpenseisOpen: false,
    IncomeisOpen: false
  }

  
  render() {

    return (
      <div className="animated fadeIn">
        {/* Nagłówek */}
        <h2>Konto główne</h2>
        <h4 className="mb-4">Saldo: <strong>3452,31zł</strong></h4>

        {/* Przyciski dodawania*/}
        <div className="mb-4 d-flex flex-row-reverse">
          <Button className="ml-2" color="danger" onClick={(e) => this.setState({ExpenseisOpen: true, IncomeisOpen: false})}>
            <i className="fa fa-minus-circle fa-xs"></i> Dodaj wydatek
          </Button>
            
          <Button color="success" onClick={(e) => this.setState({IncomeisOpen: true, ExpenseisOpen: false})}><i className="fa fa-plus-circle fa-xs"></i> Dodaj przychód</Button>
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
                    <Label htmlFor="ammount">Kwota</Label>
                    <Input type="number" id="ammount" placeholder="Wprowadź kwotę" />
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
                    <Input type="date" id="income-date" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="description">Opis</Label>
                    <Input type="text" id="description" placeholder="Podaj opis" />
                  </FormGroup>

                  <div className="float-right">
                    <Button outline color="primary" className="mr-1">Dodaj</Button>
                    <Button outline color="danger" onClick={(e) => this.setState({IncomeisOpen: false})}>Anuluj</Button>
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </IncomeDialog>

        {/* Okno dodawania wydatków */}
        <ExpenseDialog ExpenseisOpen={this.state.ExpenseisOpen }>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                <i className="fa fa-minus-circle fa-xs"></i> <strong>Nowy wydatek</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="ammount">Kwota</Label>
                    <Input type="number" id="ammount" placeholder="Wprowadź kwotę" />
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

                  <div className="float-right">
                    <Button outline color="primary" className="mr-1">Dodaj</Button>
                    <Button outline color="danger" onClick={(e) => this.setState({ExpenseisOpen: false})}>Anuluj</Button>
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

                  {/* item */}
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      Kategoria
                      <span className="float-right">20zł</span>
                    </ListGroupItemHeading>

                    <ListGroupItemText>
                      Opis transakcji
                      <span className="float-right">10/01/2020</span>
                    </ListGroupItemText>
                    <Button color="danger" className="float-right ml-1" outline>Usuń</Button>
                    <Button color="warning" className="float-right" outline>Edytuj</Button>
                  </ListGroupItem>

                  {/* item */}
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      Kategoria
                      <span className="float-right">20zł</span>
                    </ListGroupItemHeading>

                    <ListGroupItemText>
                      Opis transakcji
                      <span className="float-right">10/01/2020</span>
                    </ListGroupItemText>
                    <Button color="danger" className="float-right ml-1" outline>Usuń</Button>
                    <Button color="warning" className="float-right" outline>Edytuj</Button>
                  </ListGroupItem>

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

