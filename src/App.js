//import logo from './logo.svg';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Services  from './components/Services/Services';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Forms/Login';
import Signup from './components/Forms/Signup';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
     <div>
      <Header />
     
      
      
        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          
        </Switch>
      
      <Footer />
       </div>
  );
}

export default App;
