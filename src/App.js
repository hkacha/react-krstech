import './App.css';

import { Row, Col } from 'react-bootstrap';

import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Row className="m-5">
      <Col sm={6} lg={6} xs={6}>
        <FormComponent />
      </Col>
      <Col sm={6} lg={6} xs={6}>
        <TableComponent />
      </Col>
    </Row>
  );
}

export default App;
