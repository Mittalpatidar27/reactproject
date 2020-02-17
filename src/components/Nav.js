// Header.js
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

/*import Contact from '../Contact';
import Notfound from '../Notfound';*/

export default class Nav extends Component {
    render(){
        return (
    <Fragment>       
    <nav id="siteNav" className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
           
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to='/' >
                	
                    <img className="logoclass" src="images/itinformatix-logo.png" alt=""/>
                	
                    </Link>
            </div>
           
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/product' >Products</Link>
                    </li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span className="caret"></span></a>
						<ul className="dropdown-menu" aria-labelledby="about-us">
							<li><Link to='/registration' >Registration</Link></li>
							<li><Link to='/' >Pontificate</Link></li>
							<li><Link to='/' >Synergize</Link></li>
						</ul>
					</li>
                    <li>
                        <Link to='/contact' >Contact</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    
   </Fragment>
        )
    }
}  