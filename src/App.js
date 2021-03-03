// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Quan Ho Viet Le (Leo)',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/aboutme' },
        // { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Eat, Fly, Code!',
        subTitle: 'My github projects',
        text: 'Check out my links belows'
      },
      about: {
        title: 'About me'
      },
      // portfolio: {
      //   title: 'My portfolio'
      // },
      contact: {
        title: 'Let\'s Chat'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className='boder-bottom' bg="transparent" expand="lg" >
            <Navbar.Brand>Quan Ho Viet Le(Leo)</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className=" ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/aboutme">About Me</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/aboutme" exact render={() => <AboutMe title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
          <Footer />


        </Container>
      </Router>
    );
  }
}
export default App;
