import React, { Fragment, useEffect, useState, useRef } from "react";
import gsap from 'gsap'
import "../../styles/main.css";

// sub home components 
import Banner from "../../components/banner"
import Cases from "../../components/cases";
import Intro from "../../components/introOverlay";
import Header from "../../navigation/header";
import MainSection from "../../components/MainSection";

// gsap timeline
const tl = gsap.timeline(); 

const HomeAnimation = (completeAnimation)=>{
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
      }, 
      onComplete: completeAnimation
    });
}

const Home = () => {

  const [animationComplete, setAnimateComplete] = useState(false)
  
  const completeAnimation = ()=>{
    setAnimateComplete(true)    
  }

  useEffect(() => {  
      HomeAnimation(completeAnimation)
  }, []);

  return (
    <Fragment>  
        {/* header  */}
        <div >
          {/* { animationComplete === false ?  <Intro/> : "" }   */}
          <Header/>
          <Banner/>
          <Cases/>
        </div>

        {/* body section */}
        {
          animationComplete === false ?
          " "
          :
          <MainSection/>
        }
    </Fragment>
  );
};

export default Home;
