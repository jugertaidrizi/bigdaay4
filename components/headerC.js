import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

 function Header (props)  {
    return (
<section  id="right">
      <div className="datetime" >
      <section id="nav-bar" >

            <nav classNameName="navbar navbar-expand-lg navbar-light" />
              <a className="navbar-brand" /><img src="logo.jpg" /> 

        <button className="navbar-toggler" type="button"data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  />
              <span className="navbar-toggler-icon"></span>
  
           <div className="collapse navbar-collapse" id="navbarSupportedContent" />
	       <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <a className="nav-link" href="GertasApp.html">HomePage</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="login.html" >Log In</a>
            </li>
         </ul>
        <form className="form-inline my-2 my-lg-0" />
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </section>
    </div>
    </section>

    );
  
}
export default Header;
