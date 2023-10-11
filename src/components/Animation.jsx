import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Animation = () => {

    useEffect(()=> {
        const typewriteTextArr = ["Fullstack", "Web", "Software"]
        let cursorAnimation = gsap.to('.cursorAnimation', {opacity: 0, ease:"power2.inOut", repeat: -1, duration:0.5, repeatDelay:0.3})
        
        let typewrite = gsap.timeline({repeat: -1})
        typewriteTextArr.forEach(word => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to('.typewrite', {duration: 1, text: word})
            typewrite.add(tl)
        })

        ScrollTrigger.defaults({
            markers: true,
            toggleActions: "play reverse play reverse"
        })

        
        let scrollTL = gsap.timeline({
            scrollTrigger:{
                trigger: '.scrollTrigger',
                start: 'top center',
                end: 'bottom center',
            }
        })
        scrollTL.to('.scrollTrigger',{
            x:0,
            opacity:1,
            duration:1
        })
        let scrollRTL = gsap.timeline({
            scrollTrigger:{
                trigger: '.scrollTrigger-R',
                start: 'top center',
                end: 'bottom center',
            }
        })
        scrollRTL.to('.scrollTrigger-R',{
            x:0,
            opacity:1,
            duration:1
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

        },[])
  return (
    <></>
  )
}

export default Animation