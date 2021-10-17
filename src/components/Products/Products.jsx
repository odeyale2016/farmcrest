import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Products extends React.Component {
    render() { 
        return <div>
         <div className="slider">
				<div className="inner">
					<div className="slider-content">
						  <img src={`/Products.png`} alt="slider-1" className="img-responsive" />
                          
						<div className="title">
							 Our Products
						</div>
						 
						 
					</div>
				</div>
			</div>
            
			<div className="container">
				<div className="row">
					 <div className="body-content">
                     Our Products
					 </div>
					 <div className="line-text"></div>
					 <div className="inner-text">
                     As we strive to bring the people in our community the best food we have to offer, Farmcrest has taken another great step forward. We now proudly offer you first verified Non GMO chicken. 
                     Our specialty chicken that so many people have come to love now bears the “Non-GMO Project Verified Seal”. This means that our farm has undergone a rigorous verification process and our specialty chicken has been acknowledged for being produced with GMO avoidance. Our specialty Non GMO Chicken is fed a non gmo all vegetable diet,
					  is not fed animal by-products and is not fed antibiotics.
					 </div>
					
				 
				<div className="bg-building">
					<img src={`/bg-3.png`} alt="building" class="img-responsive" /> </div>
					 
					
				 
			 
			    <div className="bg-building2">
				<img src={`/bg-house1.png`} alt="building" class="img-responsive" /> 
			    </div>
                <div className="prop"></div>
					 
					<div className="prop-title">OUR PRODUCTS</div>
			 		
				<div className="prop-line"></div>
				<div className="prop-text">
                <ul>
					<li><Link to="/products?type=maize">Maize</Link></li>
					<li>Cassava</li>
					<li>Pepper</li>
					<li>Potatoe</li>
					<li>Beans</li>
					<li>Corn</li>
				</ul>
				</div>
				<Link className="prop-btn prop-btn-text" to="">Read more</Link>
                
            </div>
            </div>

            <div class="row">
				     <img src={`/transparentBack.png`} alt="transparent" className="transparent-back"   />
					 <div class="transparent-content">At Farmcrest Foods, we serve people by giving them an authentic connection to their food. <br/>We are on a journey striving towards better living and sustainability.  

						<p>We have a holistic perspective, seeing all aspects of the farm as interconnected as well as the farm as interrelated 
                        with the wider community and environment. Everything is “woven” together, you might say.Throughout our farming activities, we strive for ecological and social sustainability, 
                        by nourishing individuals and families, fostering community, and being stewards to our land and chickens. </p></div>
						 <Link to="#" class="transparent-signup transparent-signup-text">Sign Up Now</Link>
						</div>
        </div>;
    }
}
 
export default Products;