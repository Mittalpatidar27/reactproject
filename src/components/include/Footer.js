 // Header.js
import React, {Component, Fragment} from 'react';

export default class Footer extends Component {
    render(){
        return (
    <Fragment>  
      <footer className="footer">
    <div className="innerpadding">
      <div className="wrap">
        <div className="row nomr">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <div className="widget-title">Get Social</div>
            <div className="widget">
              <ul className="block-lists social-links">
                <li><a href="" className="fb">Facebook</a></li>
                <li><a href="" className="tw">Twitter</a></li>
                <li><a href="" className="in">Linkedin</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="widget-title">Quick Links</div>
            <div className="widget">
              <ul className="block-lists">
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Free Consultation</a></li>
                <li><a href="">Customer Portal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="widget-title">Community</div>
            <div className="widget">
              <ul className="block-lists">
                <li><a href="">Blog</a></li>
                <li><a href="">Tech Community</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Students </a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="widget-title">Trusted</div>
            <div className="widget">
              <ul className="block-lists">
                <li><a href="">Security</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="widget-title">Support</div>
            <div className="widget">
              <ul className="block-lists">
                <li><a href="">Forums</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Feedback</a></li>
                <li><a href="">Privacy & Cookies</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="row nomr">
          <div className="cprght">
          © 2019 — All Rights Reserved. ATY Cloud
          </div>
        </div>
      </div>
      
    </div>
    
  </footer>
  
     </Fragment>
        )
    }
}