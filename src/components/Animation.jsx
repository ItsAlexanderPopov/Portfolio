import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/all';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

const Animation = () => {

    useEffect(()=> {
        const typewriteTextArr = ["Fullstack", "Web", "Software"]
        gsap.to('.cursorAnimation', {opacity: 0, ease:"power2.inOut", repeat: -1, duration:0.5, repeatDelay:0.3})
        
        let typewrite = gsap.timeline({repeat: -1})
        typewriteTextArr.forEach(word => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to('.typewrite', {duration: 1, text: word})
            typewrite.add(tl)
        })

        ScrollTrigger.defaults({
            markers: false,
            toggleActions: "play reverse play reverse"
        })

        

        // Project Cards Animation
        const elements = document.querySelectorAll('.scrollTrigger-P');
        // Loop through each element and create a ScrollTrigger for each
        elements.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element, 
                start: 'top bottom', 
                end: 'bottom top',
            },
            x:0,
            opacity:1,
            duration:1
        });
        });

        let scrollAbout = gsap.timeline({
            scrollTrigger:{
                trigger: '.about',
                start: 'top 120%',
                end: 'bottom center',
                scrub: 2,
                onLeave: () => {
                     const webImage = document.getElementById('img-web');
                    if (webImage) {
                      webImage.className = 'w-[80px] h-[80px] lg:ml-0 -ml-20 lg:translate-x-[192px] translate-x-[70px] mt-6 grayscale-0';
                    } 
                },
                onEnterBack: () => {
                    const webImage = document.getElementById('img-web');
                   if (webImage) {
                     webImage.className = 'w-[80px] h-[80px] lg:ml-0 -ml-20 lg:translate-x-[192px] translate-x-[70px] mt-6 grayscale';
                   } 
               },
               
            }
        })

        gsap.set(".codeIcon", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
        scrollAbout
        .to(".codeIcon",{
            duration:0, 
            opacity:1
        })
        .to(".codeIcon", {
            motionPath:{
                path:"M 240 -300 C 240 -180 120 -240 120 -120 C 120 0 300 -80 300 120 C 300 180 240 180 240 240" },
                ease:"power2.in",
            },);
    },[])
  return (
    <></>
  )
}

export default Animation