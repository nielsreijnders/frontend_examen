import Router from 'preact-router';
import { h, render } from 'preact';
import Home from '../pages/Home';
import Footer from './Footer';
import Header from './Header';
import About from '../pages/About';

/** Stateless app */
const App = () => (
  <div className="app">
    <Header />
    <Router>
      <Home path="/" />
      <Home path="/test" />
      <About path="/overmij" />
    </Router>
    <Footer />
  </div>
);

export default App;
