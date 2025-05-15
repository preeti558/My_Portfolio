import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import Project4 from '../images/project4.png';
import Project5 from '../images/project5.jpg';
import Project7 from '../images/project7.png';
import Project6 from '../images/project6.jpg';
import Project2 from '../images/project2.png';
import github from '../images/github.png';
import Project1 from '../images/project1.png';
import Project3 from '../images/project3.png';

// Web projects
const webItem = [
  {
    link: 'https://job-dhundo.netlify.app/',
    title: 'JOB DHUNDO - A JOB FINDING PORTAL',
    techStack: 'Useful repo for most common Full Stack challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API, Springboot, postgresql',
    image: Project1,
    color: '#E5E483',
    githubLink: 'https://github.com/preeti558/JobDhundo_Backend'
  },
  {
    link: 'https://preeti-profile.netlify.app/',
    title: 'My_Portfolio website',
    techStack: 'Tech Stack: React JS',
    desc: ' ',
    image: Project2,
    color: '#0FFFFF',
    githubLink: 'https://github.com/preeti558/My_Portfolio'
  },
  {
    link: 'https://github.com/preeti558/Vivah-matrimonialWebsite',
    title: 'Vivah - A Matrimonial Website',
    techStack:
      'Angular, Springboot, MySQL',
    desc: ' ',
    image: Project3,
    color: '#D2E0FB'
    
  },
  {
    link: 'https://github.com/preeti558/Broadcasting-ChatServer-Project?tab=readme-ov-file',
    title: 'Broadcasting ChatServer  ',
    techStack: 'Tech Stack- Java',
    desc: ' ',
    image: Project4,
    color: '#d5ebda',
    githubLink:
      'https://github.com/preeti558/Broadcasting-ChatServer-Project?tab=readme-ov-file'
  },
];

const androidAppItems = [
  {
    link: 'https://github.com/preeti558/ChatApp',
    title: 'HiChat - A Chatting Application',
    techStack: 'Tech Stack: Java, Android Studio ',
    desc: ' ',
    image: Project5,
    color: '#CBD18F',
    githubLink:
      'https://github.com/preeti558/ChatApp'
  },
  {
    link: 'https://github.com/preeti558/Lookie/tree/master',
    title: 'Lookie - Ecommerce shopping mobile app UI design',
    techStack: 'Tech Stack- Java , XML, Android Studio',
    desc: ' ',
    image: Project6,
    color: '#d0f4de',
    githubLink: 'https://github.com/preeti558/Lookie/tree/master'
  },
  {
    link: 'https://github.com/preeti558/Translator',
    title: 'Translator',
    techStack: 'Tech Stack- Java, XML, Android Studio',
    desc: ' ',
    image: Project7,
    color: '#e9c46a',
    githubLink:
      'https://github.com/preeti558/Translator'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
