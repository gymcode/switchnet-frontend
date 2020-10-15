import React, { Fragment, useEffect, useState, useRef } from "react";
import gsap from 'gsap'
import "../../styles/main.css";

// navigation
import Header from "../../navigation/header"
import Banner from "../../components/banner"
import Cases from "../../components/cases";
import Intro from "../../components/introOverlay";

const Home = () => {
  
  const vh = window.innerHeight * .01; 
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  useEffect(() => {  

    // gsap timeline
    const tl = gsap.timeline(); 

    tl.from(".main h2 ", 1.8, {  
      opacity: 0,
      y: 100, 
      ease: "power4.out", 
      delay: 1, 
      skewY: 3, 
      stagger: {
        amount: 0.3
      }
    }).to(".overlay-top", 1.6, {
      height: 0, 
      ease: "expo.inOut", 
      stagger: 0.4
    }).to('.overlay-bottom', 1.6, {
      width: 0, 
      ease: "expo.inOut",
      delay: -.8, 
      stagger: {
        amount: .4
      }
    }).to('.intro-overlay', 0, {
      css: {display: "none"}
    }).from('.casesDiv img', 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2, 
      stagger: {
        amount: 0.4
      }
    });

  }, []);

  return (
    <Fragment>   
        <Intro/>   
        <Header/>        
        <Banner/>
        <Cases/>
    </Fragment>
  );
};

export default Home;
