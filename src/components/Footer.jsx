// eslint-disable-next-line
import React, { Component } from 'react'
class Footer extends React.Component {
    render() { 
        return <div>
              <section id="partner">
			 <div className="as-seen-on"><a href="#"><img src={`/asseenon.png`} alt="as-seen-on" className="img-responsive" /></a></div>
			 <div className="punch"><a href="#"><img src={`/punch.png`} alt="punch" className="img-responsive" /></a></div>
			 <div className="finance"><a href="#"><img src={`/finance.png`} alt="finance" className="img-responsive" /></a></div>
			 <div className="linkedn"><a href="#"><img src={`/linkedn.png`} alt="linkedn" className="img-responsive" /></a></div>
		    </section>
            <section id="footer">
				 <div className="container">
					 <div className="footer">
					 </div>
						 <a href="#" ><img src={`/nibbs.svg`} className="img-nibbs" alt="nbs"/></a>
						 <a href="" ><img src={`/oldmutual.svg`} className="img-oldmutual-1" alt="oldmutual" /></a>
						 <a href="" ><img src={`/xds.svg`} className="img-xds"  alt="xds"/></a>
						 <a href="" ><img src={`travelstart.svg`} className="img-travelstart" alt="travelstart"/></a>
						 <a href="" ><img src={`trapezoid.svg`} className="img-trapezoid" alt="trapezoid"/></a>
						 <a href="" ><img src={`meritabode.svg`} className="img-meritabode" alt="meritaboid" /></a>
					 <div className="footer-address">Email: info@farmcrest.com<br/>
						Address: 1, Taiwo Oluwafemi Ige Crescent Off Nawarudeen Road <br/>
						Olorunsogo Geri-Alimi Ilorin.</div>
				 </div>
				 <div className="footer-icons1"><a href="https://api.whatsapp.com/send?phone=234%20805%34566%34&text=Hi+Farmcrest" class=""><img src={`watshap.png`} /></a></div>
				 <div class="footer-icons2"><a href="https://www.linkedin.com/company/farmcrest/" class=""><img src={`linkedn-icon.png`} /></a></div>
				 <div class="footer-icons3"><a href="https://twitter.com/farmcrest" class=""><img src={`twitter-icon.png`} /></a></div>
				 <div class="footer-icons4"><a href="https://www.facebook.com/Farmcrest-894437667603038/" class=""><img src={`facebook-icon.png`} /></a></div>
				 <div class="footer-icons5"><a href="https://www.instagram.com/farmcrest/" class=""><img src={`instagram-icon.png`} /></a></div>
			 </section>
		 
        </div>;
    }
}
 
export default Footer;