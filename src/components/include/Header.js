// Header.js
import React, {Component, Fragment} from 'react';

let path = window.location.pathname;

export default class Header extends Component {
    
  render(){
      
        return (
  <Fragment>       
            <header className={(path === "/") ? 'header-desktop' : 'header-desktop new-header-desktop' }>
    <div className="outer">
      <div className="wrap">
        <div className="contents-wrap">
          <div className="flex-box">
            <div className="flex-item">
              <div className="navigations">
                <ul className="inline-lists">
                  <li>
                    <a href="/" className="brand-logo">
                      <span className="logo-inner">
                        <img src="images/logo.png" alt=""/>
                      </span>
                    </a>
                    
                  </li>
                  <li><a href="/latestnewsread">Services</a></li>
                  <li><a href="/latestnewsread">Events</a></li>
                  <li><a href="/aboutus">About</a></li>
                  <li><a href="/cloudbackup">Cloud-Backup</a></li>
                  <li><a href="/network">Network</a></li>
                  <li><a href="/wireless">Wireless</a></li>
                  <li><a href="/mangeservice" className="menu">Mange-Service</a></li>
                  <li><a href="/contactus">Contact Us</a></li>
                </ul>
                
              </div>
              
            </div>
            
            <div className="flex-item">
              <div className="navigations">
                <ul className="inline-lists">
                  <li><a href="/latestnewsread">Free Consultation</a></li>
                            <li><a href="https://atycloud11.b2clogin.com/atycloud11.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsignin1&client_id=4c9fd3dc-ad7f-4870-8910-9b837d5b6192&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.atycloud.com.au%2F&scope=openid&response_type=id_token&prompt=login" className="ac_quick">Customer Portal</a></li>
                </ul>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  </header>
  
  <header className="header-mobile">
    <div className="outer">
      <div className="flex-box">
        <div className="flex-item">
          <div className="brand-logo">
            <a href="" className="logo-inner">
              <img src="images/logo.png" alt=""/>
            </a>
          </div>
        </div>
        
        <div className="flex-item customer-portal-button">
          <a href="" className="ac_quick">Customer Portal</a>
        </div>
        
        <div className="flex-item">
          <div className="hamburger">
              <img src="images/menu_icon.png" alt="Menu Open"/>
              <img src="images/menu_close_icon.png" alt="Menu Close"/>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
    <div className="dropover">
      <div className="padding-box">
        <div className="dropover-inner">
          <ul className="block-lists m-navigations">
            <li><a href="/latestnewsread">Services</a></li>
            <li><a href="/latestnewsread">About</a></li>
            <li><a href="/latestnewsread">Contact Us</a></li>
            <li><a href="/latestnewsread">Free Consultation</a></li>
          </ul>
        </div>
        
      </div>
      
    </div>
    
  </header>
  
    </Fragment>
        )
    }
}