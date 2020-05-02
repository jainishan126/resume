import React, { Component } from 'react';

class Testimonials extends Component{
    render() {
        return (
            <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Participations</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                    <div class="container">
                    <a href="#modal-01" title /> 
                    <img alt="" src="images/ted.png" />
                    <div class="overlay">
                      <p>
                        Been a part of the first edition of TEDx NIIT University 2017-18. Worked 
                        as a "Production and Operations Lead" in the second edition, 2018-19. 
                      </p>
                       </div></div>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                    <img alt="" src="images/logo.png" />
                      <p>First runner up in the Internal Smart India Hackathon, 2020. 
                      </p>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
    }
}

export default Testimonials;
