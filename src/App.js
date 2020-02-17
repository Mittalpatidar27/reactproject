import React, { Component } from 'react';

import {Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Latestnewsread from './components/pages/Latestnewsread';
import Contactus from './components/pages/Contactus';
import Signinform from './components/pages/Signinform';
import Aboutus from './components/pages/Aboutus';
import Cloudbackup from './components/pages/Cloudbackup';
import Network from './components/pages/Network';
import Wireless from './components/pages/Wireless';
import Mangeservice from './components/pages/Mangeservice';


import Footer from './components/include/Footer';
import Header from './components/include/Header';



//import logo from './logo.svg';
//import './App.css';
//import './style.css';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/signinform" component={Signinform} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/cloudbackup" component={Cloudbackup} />
          <Route exact path="/network" component={Network} />
          <Route exact path="/wireless" component={Wireless} />
          <Route exact path="/mangeservice" component={Mangeservice} /> 
        <Route exact path="/latestnewsread" component={Latestnewsread} />
        </Switch>
        <Footer />
        
      </div>
      

    );
  }
}

export default App;
