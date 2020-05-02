import React, { Component } from 'react';

class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="rounded-circle img-fluid" src="images/ishan.png" alt="profile pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span> {resumeData.address} <br />
                  </span>
                  <span>{resumeData.phone}</span><br />
                  <span><a href="#">{resumeData.linkedin}</a></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/ppublic/resume.pdf" download className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
        );
    }
}

export default About;