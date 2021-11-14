import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route exact path="/home">
           <Home></Home>
        </Route>
        <Route exact path="/service">
           <Services></Services>
        </Route>
        <Route exact path="/about">
           <About></About>
        </Route>
        <Route exact path="/contact">
           <Contact></Contact>
        </Route>
        <Route exact path="*">
           <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
