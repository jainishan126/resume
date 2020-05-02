import React, { Component } from 'react';

class Resume extends Component{
    render() {
        return (
            <section id="resume">
{/* Education
----------------------------------------------- */}
<div className="row education">
  <div className="three columns header-col">
    <h1><span>Education</span></h1>
  </div>
  <div className="nine columns main-col">
    <div className="row item">
      <div className="twelve columns">
        <h3>NIIT University</h3>
        <p className="info">Bachelors in Technology <span>•</span> <em className="date">July 2017 - 2021</em> <span>•</span> <em className="percentage">7.43 CGPA</em></p>
        <p>
        NIIT University (NU) is a not-for-profit University notified by the Government of Rajasthan in 2009. A premier
        institute marked by higher learning and research, NU seeks to create original thinkers who will lead the knowledge society of the future.
        The University inherits more than three decades of rich expertise and global know-how of the NIIT group.
        </p>
      </div>
    </div> {/* item end */}
    <div className="row item">
      <div className="twelve columns">
        <h3>Saint Xavier's </h3>
        <p className="info">Higher Secondary School<span>•</span> <em className="date">March 2017</em> <span>•</span> <em className="percentage">85%</em></p>
        <p>
          
            St. Xavier's Senior Secondary School, Jaipur is a Christian minority school under the management 
            of the Jesuits, an international Christian Religious Order, known as the Society of Jesus. Fr. Robert Ludwig
            The First Principal, along with Fr. William Hussey took over the school in 1943, followed by many great leaders.

        </p>
      </div>
    </div> {/* item end */}
  </div> {/* main-col end */}
</div> {/* End Education */}
{/* Work
----------------------------------------------- */}
<div className="row work">
  <div className="three columns header-col">
    <h1><span>EXPERIENCE</span></h1>
  </div>
  <div className="nine columns main-col">
    <div className="row item">
      <div className="twelve columns">
        <h3>EDU4SURE</h3>
        <p className="info">Business Developer Intern  <span>•</span> <em className="date">April 2019 - June 2019</em></p>
        <p>
          As a Business Developer Intern, my duty was to identify and contact prospective customers or partner
          companies, promoting the business online and via word-of-mouth, and creating client proposals and 
          contacts. 
        </p>
      </div>
    </div> {/* item end */}
    <div className="row item">
      <div className="twelve columns">
        <h3>Vibrant Publishers</h3>
        <p className="info">Graphic Designer <span>•</span> <em className="date">Feb 2020 - Present</em></p>
        <p>
          Vibrant Publishers, USA is a leading publishing house with focus on high quality books for IT 
          professionals, management professionals and graduate students. As a Graphic Designer I visual concepts
          using Computer Software such as Photoshop, Adobe XD, etc. I develop the overall layout and production 
          design for insta, fb and LinkedIn promotions. 
        </p>
      </div>
    </div> 
    
    {/* item end */}
  </div> {/* main-col end */}
</div>

     {/* End Work */}
{/* Skills
----------------------------------------------- */}
<div className="row skill">
  <div className="three columns header-col">
    <h1><span>Skills</span></h1>
  </div>
  <div className="nine columns main-col">
    <p>Being a Computer Science Grduate I am well versed with the concepts of Software 
        Enginnering. I also have a decent knowledge of Programming languages like Python,
        Java and R. My interests in designing made me explore more and more about the designing 
        related softwares, and now I am pretty confident about UI-UX design, Photoshop, etc. 
        Last but not the least, front-end development is essential to create an intutive and business 
        experiences for web applications or website, hence, I am exploring my talent into the same. 
    </p>
    <div className="bars">
      <ul className="skills">
        <li><span className="bar-expand algo" /><em>DS & Algorithms - 60%</em></li>
        <li><span className="bar-expand python" /><em>Python - 65%</em></li>
        <li><span className="bar-expand java" /><em>Java - 55%</em></li>
        <li><span className="bar-expand react" /><em>ReactJS - 50%</em></li>
        <li><span className="bar-expand r" /><em>R - 40%</em></li>
        <li><span className="bar-expand html5" /><em>HTML5 - 80%</em></li>
        <li><span className="bar-expand photoshop" /><em>Photoshop - 60%</em></li>
        </ul>
     </div>{/* end skill-bars */}
  </div> {/* main-col end */}
</div> {/* End skills */}
</section>
        );
    }
}

export default Resume;
