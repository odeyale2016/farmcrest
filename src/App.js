//import logo from './logo.svg';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutPage from './components/About/AboutPage';
import Services  from './components/Services/Services';
import Products from './components/Products/Products';
//import Contact from 'components/Contact/Contact';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
     <div>
      
      <BrowserRouter>
      <Header />
      
        <Switch>
          <Route path="/">
            <MainContent />
          </Route>
          <Route path="/aboutpage">
            <AboutPage />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        
        </Switch>
      </BrowserRouter>
      <Footer />
       </div>
  );
}

export default App;
