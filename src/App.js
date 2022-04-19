import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';
import Feature from './Pages/Feature/Features';
import PricingPlane from './Pages/PricingPlane/index.jsx';
import ContactUs from './Pages/ContactUs/ContactUs';
import PricingForm from './Components/PricingPlan/PricingForm/Index';
import './App.scss';



const App = ()=> {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/aboutUs"><About/></Route>
        <Route path="/features"><Feature/></Route>
        <Route path="/pricing-plan"><PricingPlane/></Route>
        <Route path="/contact-us"><ContactUs/></Route>
        <Route path="/pricing-form"><PricingForm/></Route>
      </Switch>
    </div>
  );
}

export default App;
