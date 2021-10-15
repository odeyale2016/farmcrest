// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import farmlogo from './farmlogo.png';
class Header  extends React.Component {
    render() { 
        return <div>
 
        
        <div className="logo">
				  <img src={`/farmlogo.png`} alt="farmcrest" />
			</div>

			<nav >
				 <ul>
					<li><Link   to="/" className="active">Home</Link></li>
					 
					<li>	<Link    to="/aboutpage">About us</Link></li>
					 
						<li><Link   to="/products">Our Products</Link></li>
					 
						<li><Link    to="/services">Our Farm</Link></li>
					 
						<li><Link   to="/contact">Contact us</Link></li>
						
				 </ul>
				 
				 
			</nav>
			<div ><Link className="btn-login login-text" to="#">Log in</Link></div>
				 <div ><Link className="btn-signup signup-text"  to="#">Sign Up</Link></div>
			 
                </div>;
			 
    }
}
 
export default Header;
