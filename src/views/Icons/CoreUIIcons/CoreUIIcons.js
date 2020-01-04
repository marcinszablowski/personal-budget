import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class CoreUIIcons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Nagłówek */}
        <h2>Konto główne</h2>
        <h4 className="mb-4">Saldo: <strong>3452,31zł</strong></h4>

        {/* Przyciski */}

        <div className="mb-4 d-flex flex-row-reverse">
          <Button className="ml-2" color="danger"><i className="fa fa-minus-circle fa-xs"></i> Dodaj wydatek</Button>
          <Button color="success"><i className="fa fa-plus-circle fa-xs"></i> Dodaj przychód</Button>
        </div>
        <Card>
          <CardHeader>
            Transakcje
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <Table hover bordered striped responsive size="lg">
                  <thead>
                    <tr>
                      <th>Kategoria</th>
                      <th>Opis</th>
                      <th>Kwota</th>
                      <th>Data</th>
                      <th>Edycja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>2012/01/01</td>
                      <td>2012/01/01</td>
                      <td>2012/01/01</td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                      <td>2012/02/01</td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>2012/03/01</td>
                      <td>2012/03/01</td>
                      <td>2012/03/01</td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>2012/01/21</td>
                      <td>2012/01/21</td>
                      <td>2012/01/21</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CoreUIIcons;

