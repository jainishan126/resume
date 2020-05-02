import React, { Component } from 'react';

class Portfolio extends Component{
    render() {
        return (
            <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/sentiment.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Sentiment Analysis and Opinion Recommendation</h5>
                        <p>Natural Language Processing, Python</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/exam.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Exam Scheduling</h5>
                        <p>R&D Project, OptaPlanner</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/ecommerce.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>E-Commerce Development</h5>
                        <p>Capstone Project, ReactJS</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/face.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Face Detection</h5>
                        <p>Python, OpenCV</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/parser.png" top= "-10px" left= "-30px" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Resume Parser</h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/website.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>College e-magazine</h5>
                        <p>Web Design, React</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/sentiment.png" alt="" />
            <div className="description-box">
              <h4>Sentiment Analysis and Opinion Recommendation</h4>
              <p>Sentiment analysis is extremely useful in social media
                 monitoring as it allows us to gain an overview of the wider public
                  opinion behind certain topics. I am using Python's NLP library to 
                  determine the users' emotions through their comments and feedbacks. I have also
                  extended the scope of the project, and have incorporarted the feature of recommendation
                  a certain service or a product to others. 
                  </p>
              <span className="categories"><i className="fa fa-tag" />Python, NLP</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/exam.png" alt="" />
            <div className="description-box">
              <h4>Exam Scheduling</h4>
              <p>Exam Scheduling is my R&D project as well. The idea behind choosing this topic
                is that we were facing certain issues with exam scheduling as the college system was not 
                automated. Intensive research has been done in this project. I have developed the respective system
                using both OptaPlanner and Python and compared their outcomes. 
              </p>
              <span className="categories"><i className="fa fa-tag" />OptaPlanner</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/ecommerce.png" alt="" />
            <div className="description-box">
              <h4>e-Commerce Website</h4>
              <p>This project has been developed using MERN stack, enabling us to deeply understand
                the frontend as well as backend Development. We have throughly gone through MongoDB, NodeJS, 
                Express JS and React JS.
              </p>
              <span className="categories"><i className="fa fa-tag" />Website Development, ReactJS</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/face.png" alt="" />
            <div className="description-box">
              <h4>Face Detection</h4>
              <p>A number of applications make Face Detection, a compulsory project into one's portfolio.
                Face detection, today is useful in law enforcement, finding missing persons', protecting schools, colleges
                from threats, etc. I have used Open CV library of python and machine learning to train my model from 
                a given set of database.   </p>
              <span className="categories"><i className="fa fa-tag" />Python, OpenCV</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/parser.png" alt="" />
            <div className="description-box">
              <h4>Resume Parser</h4>
              <p>Resume Parser is an useful application for firms, etc. to determine whether the given candidate 
                is suitable enough. Also, the application helps it's user to determine whether their CV meets the
                demands of a company they are aspiring for. Technology used: Python. 
              </p>
              <span className="categories"><i className="fa fa-tag" />Python</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/website.png" alt="" />
            <div className="description-box">
              <h4>E-magazine</h4>
              <p>A small gesture to thank University. I have used React JS to build this e-magazine, giving all the
                relevant University related information to it's users and others. Also, this has strengthened by frontend
                Development Skills. 
              </p>
              <span className="categories"><i className="fa fa-tag" />React, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          </div> {/* row End */}
      </section>
        );
    }
}

export default Portfolio;
