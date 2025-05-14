import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>PREETI VERMA</b>. I’m a passionate and results-driven Computer 
            Science graduate (B.Tech, 2025) with a strong foundation in Java Full Stack Development.
             I’ve built real-world web applications using <b>Java, Spring Boot, MySQL, React, </b> and REST APIs,
              and gained hands-on experience as a <b> Java Full Stack Project Intern at Infosys Springboard.</b> :)
          </p>
          <p className={classes.br}>
            With a solid grasp of Data Structures and Algorithms, I enjoy solving problems and building scalable,
             user-focused software solutions. I'm now seeking opportunities to contribute to innovative tech teams, 
             grow as a Software Engineer, and build impactful products.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
