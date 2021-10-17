import React, { Component } from 'react'
class Contacts extends React.Component {
    render() { 
        return <div>  <div className="slider">
        <div className="inner">
            <div className="slider-content">
                  <img src={`/Contacts.png`} alt="slider-1" className="img-responsive" />
                  
                <div className="title">
                      Contacts
                </div>
                 
                 
            </div>
        </div>
    </div>
    
    <div className="container">
        <div className="row">
             <div className="body-content">
             Our Contacts
             </div>
             <div className="line-text"></div>
             <div className="inner-text">
             1, Taiwo Oluwafemi Ige  Crescent Off Nawarudeen Road 
             Olorunsogo Geri-Alimi Ilorin.<br/>
             Email: info@farmcrest.com <br/>
            
             Phone: +234 80 5345 6634
             </div>
            
         
        <div className="bg-building">
            <img src={`/bg-4.png`} alt="building" class="img-responsive" /> </div>
             
            
         
     
        <div className="bg-building2">
        <img src={`/bg-house1.png`} alt="building" class="img-responsive" /> 
        </div>
        <div className="prop"></div>
             
            <div className="prop-title">OUR PRODUCTS</div>
             
        <div className="prop-line"></div>
        <div className="prop-text">
        <ul>
            <li> Maize</li>
            <li>Cassava</li>
            <li>Pepper</li>
            <li>Potatoe</li>
            <li>Beans</li>
            <li>Corn</li>
        </ul>
        </div>
        <a className="prop-btn prop-btn-text" href="">Read more</a>
        
    </div>
    </div>

    <div class="row">
             <img src={`/transparentBack.png`} alt="transparent" className="transparent-back"   />
             <div class="transparent-content">At Farmcrest Foods, we serve people by giving them an authentic connection to their food. <br/>We are on a journey striving towards better living and sustainability.  

                <p>We have a holistic perspective, seeing all aspects of the farm as interconnected as well as the farm as interrelated 
                with the wider community and environment. Everything is “woven” together, you might say.Throughout our farming activities, we strive for ecological and social sustainability, 
                by nourishing individuals and families, fostering community, and being stewards to our land and chickens. </p></div>
                 <a href="#" class="transparent-signup transparent-signup-text">Sign Up Now</a>
                </div></div>;
    }
}
 
export default Contacts;