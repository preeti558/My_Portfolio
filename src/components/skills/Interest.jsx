import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>Java & Spring Boot</h3>
          <p>
            I specialize in building scalable, robust backend systems using Java 
            and Spring Boot. With a deep understanding of the Spring ecosystem, 
            I design and develop RESTful APIs that ensure high performance, security, 
            and reliability. I have hands-on experience with dependency injection, Spring Data 
            JPA, and Spring Security for creating secure and efficient applications that cater to complex business needs.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Frontend Development</h3>
          <p>
            I have a strong foundation in building responsive, dynamic user 
            interfaces using React combined with HTML, CSS, and JavaScript. 
            I focus on creating seamless, user-friendly experiences with a focus 
            on performance and responsiveness across devices. My expertise includes
             using React hooks, state management (like Redux), and integrating frontend
              applications with backend services via REST APIs.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Full Stack Development</h3>
          <p>
            As a Full Stack Developer, I excel in integrating both frontend 
            and backend components into a single cohesive system. From designing
             RESTful APIs in Spring Boot to creating interactive UIs in React, 
             I ensure seamless data flow between the client and server. I handle
              the entire development lifecycle—from creating database schemas to 
              deploying applications—focusing on delivering high-quality solutions 
              that meet user needs and business objectives.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}
