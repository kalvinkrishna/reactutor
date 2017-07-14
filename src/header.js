import React, { Component } from 'react';

function Person(props){
  return <h1 className='nickname'>Hello, {props.name}</h1>
}

function Welcome(props) {
  return (
      <div>
        <Person name={props.name}/>
        <Person name={props.namedua}/>
      </div>
  );
}

function Navbar(){
  return(
      <div className='Navbar'>
          <div className="banner">
              <div className="header-top" >
                <div className="container">
                  <div className="head-logo">
                    <a href=""><img className="company-logo" src={ require('./baliradianceplugin/images/logo.png') } alt="Bali Radiance Logo"/></a>
                  </div>
                  <div className="top-nav">
                    <ul className="list-inline">
                      <li><a href="">Home</a></li>
                      <li><a href="profile">Profile</a></li>
                      <li><a href="product">Product</a></li>
                      <li><a href="package">Package</a></li>
                      <li><a href="destination">Destination</a></li>
                      <li><a href="contactus">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
      </div>
  );
}

class Header extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>tutorial cok</div>

        <Welcome name="Anwar" namedua="Budi"/>
      </div>
    );
  }
}

export default Header;