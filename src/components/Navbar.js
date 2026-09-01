import React from 'react'  
import PropTypes from 'prop-types'
import logo from './Logo.png'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar">
          <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} width="60" height="30" alt="logo" className="d-inline-block align-text-top"/>
                  {props.title}
                </a>
                
          </div>
        </nav>
    </div>
  )
}



Navbar.propTypes = {
  title : PropTypes.string
}

Navbar.defaultProps = {
    title : "set title here" 
};
