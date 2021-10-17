// eslint-disable-next-line
import React, { Component } from 'react'
class About  extends React.Component {
    render() { 
        return <div>
             <div className="slider">
				<div className="inner">
					<div className="slider-content">
						  <img src={`/About.png`} alt="slider-1" className="img-responsive" />
                          
						<div className="title">
							 About Us
						</div>
						 
						 
					</div>
				</div>
			</div>
            
			<div className="container">
				<div className="row">
					 <div className="body-content">
                     About Farmcrest
					 </div>
					 <div className="line-text"></div>
					 <div className="inner-text">
                     Farmcrest offers an ecosystem of products and services that helps everyone connected with the Food Value Chain
                      (farmers, producers, financial institutions, state governments, etc.) make smarter decisions. Our goal is to enable everyone participate in the achievement
                       of global food security and impact on the lives of One Million smallholder farmers by 2021. Our network with access to finance, reduce the cost of production, open market access and harvest better yields - all in one place. Everything we do at Farmcrest Foods is designed to bring you the freshest, healthiest, best–tasting chicken,
                        just as nature — and our families — intended.
					 </div>
					
				 
				<div className="bg-building">
					<img src={`/bg-2.png`} alt="building" class="img-responsive" /> </div>
					<div className="fintech-title">Get our plantains at cheapest price <br /> on our Farm</div>
					
				 
			 
			    <div className="bg-building2">
				<img src={`/bg-house1.png`} alt="building" class="img-responsive" /> 
			    </div>
                <div className="prop"></div>
					 
					<div className="prop-title">OUR MISSION <br/>&<br/> COMMITTMENT</div>
			 		
				<div className="prop-line"></div>
				<div className="prop-text">
                Through the relentless pursuit of excellence, we are committed to producing healthy, consumaeables products.
                 We are also proud to be stewards of the land and reinvigorate our local economy.
					
				</div>
				<a className="prop-btn prop-btn-text" href="index.html">Read more</a>
                
            </div>
            </div>

            <div class="row">
				     <img src={`/transparentBack.png`} alt="transparent" className="transparent-back"   />
					 <div class="transparent-content">At Farmcrest Foods, we serve people by giving them an authentic connection to their food. <br/>We are on a journey striving towards better living and sustainability.  

						<p>We have a holistic perspective, seeing all aspects of the farm as interconnected as well as the farm as interrelated 
                        with the wider community and environment. Everything is “woven” together, you might say.Throughout our farming activities, we strive for ecological and social sustainability, 
                        by nourishing individuals and families, fostering community, and being stewards to our land and chickens. </p></div>
						 <a href="#" class="transparent-signup transparent-signup-text">Sign Up Now</a>
						</div>

        </div>;
    }
}
 
export default About;