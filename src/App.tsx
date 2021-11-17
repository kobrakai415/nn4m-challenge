import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import ProductPage from './views/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Router>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/product/:productId" exact render={() => <ProductPage />} />
          </Router>
        </Row>
      </Container>

    </div>
  );
}

export default App;
