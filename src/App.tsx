import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import ProductPage from './views/ProductPage/ProductPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Row style={{ minHeight: "100vh" }}>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/product/:productId" exact render={() => <ProductPage />} />
          </Row>
        </Container>
      </Router>

    </div>
  );
}

export default App;
