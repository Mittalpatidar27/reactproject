import React, { Component, Fragment } from 'react';

export default class Signinform extends Component {
    render() {
        return (
            <Fragment>


<div className="uaf-wrapper">
<div className="innerpadding">
<div className="outer">
<div className="wrap">
<div className="uaf-form">
<div className="tab">
<div className="tab-link active" data-tab="tab-1">Sign In</div>
<div className="tab-link" data-tab="tab-2">Sign Up</div>
</div>

<div className="tab-content active" id="tab-1">
<div className="form-horizontal">
<div className="form--group">
<div className="icon">
<i className="fas fa-envelope"></i></div>
<input type="text" name="" className="form--control" placeholder="yours@example.com"/>
</div>

<div className="form--group">
<div className="icon"><i className="fas fa-lock"></i></div>
<input type="password" name="" className="form--control" placeholder="Password"/>
</div>

<a href="" className="forgot-password">Forgot your password?</a>
<div className="submit-button">
<input type="button" name="" className="smbt-button" value="Sign In"/>
</div>
</div>

</div>

<div className="tab-content" id="tab-2">
<div className="form-horizontal">
<div className="form--group">
<div className="icon"><i className="fas fa-user"></i></div>
<input type="text" name="" className="form--control" placeholder="First Name"/>
</div>

<div className="form--group">
<div className="icon"><i className="fas fa-user"></i></div>
<input type="text" name="" className="form--control" placeholder="Last Name"/>
</div>

<div className="form--group">
<div className="icon"><i className="fas fa-envelope"></i></div>
<input type="text" name="" className="form--control" placeholder="Email"/>
</div>

<div className="form--group">
<div className="icon"><i className="fas fa-phone"></i></div>
<input type="text" name="" className="form--control" placeholder="Phone"/>
</div>

<div className="form--group">
<div className="icon"><i className="fas fa-lock"></i></div>
<input type="password" name="" className="form--control" placeholder="Password"/>
</div>

<div className="form--group">
    <div className="icon"><i className="fas fa-lock"></i></div>
    <input type="password" name="" className="form--control" placeholder="Confirm Password" />
</div>

    <div className="spacer20"></div>
    <div className="submit-button">
        <input type="button" name="" className="smbt-button" value="Sign Up"/>
</div>

    </div>

</div>

</div>

</div>

</div>

</div>

</div>



           </Fragment>
                                                    )}}     