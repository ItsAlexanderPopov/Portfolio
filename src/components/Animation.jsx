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
        
        let lastRoundedProgress = -1;
        
        const changeImageSrcAndAnimate = (src) => {
            const lineDesc = document.querySelector('.lineDesc');
            const codeIcon = document.querySelector('.codeIcon');
            const currentSrc = codeIcon.src.substring(codeIcon.src.lastIndexOf('/') + 1);

            if (currentSrc !== src) {
            if(src === 'idea.svg'){
                lineDesc.className = 'max-[300px]:hidden flex lineDesc lg:static absolute lg:left-0 left-10 flex-col justify-around h-[400px] text-lightMainColor [&_p:nth-child(1)]:text-thirdColor'
            } else if(src === 'code.svg'){
                lineDesc.className = 'max-[300px]:hidden flex lineDesc lg:static absolute lg:left-0 left-10 flex-col justify-around h-[400px] text-thirdColor [&_p:nth-child(3)]:text-lightMainColor'
            } else{
                lineDesc.className = 'max-[300px]:hidden flex lineDesc lg:static absolute lg:left-0 left-10 flex-col justify-around h-[400px] text-thirdColor'
            }
            const tl = gsap.timeline({
              onComplete: () => {
                // Change the image source after scaling down
                codeIcon.src = src;
                
                // Create a new timeline for scaling back up
                const tl2 = gsap.timeline();
                tl2.to(codeIcon, { scale: 1, duration: 0.2 });
              },
            });
          
            // First animation: Scale down to 0.2
            tl.to(codeIcon, { scale: 0, duration: 0.2 });
        }};

        let scrollAbout = gsap.timeline({
            scrollTrigger:{
                trigger: '.about',
                start: 'center bottom',
                end: 'center 32%',
                scrub: 2,
                onUpdate: () => {
                    const progress = scrollAbout.progress();
                    const roundedProgress = Math.round(progress * 10) / 10;
                    if (roundedProgress !== lastRoundedProgress) {
                        lastRoundedProgress = roundedProgress;
                     }
                    if(lastRoundedProgress < 0.7){
                        changeImageSrcAndAnimate('idea.svg'); 
                    }
                    else if (lastRoundedProgress >= 0.7 && lastRoundedProgress < 1) {
                      changeImageSrcAndAnimate('code.svg'); 
                    }
                  },
                onLeave: () => {
                    changeImageSrcAndAnimate('product.svg'); 
                },
            }
        })

        gsap.set(".codeIcon", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%", opacity: 1,});
        scrollAbout
        .to(".codeIcon",{
            duration:0, 
            opacity:1
        })
        .to(".codeIcon", {
            motionPath:{
                path:"M 130 -355 C 130 -265 40 -310 40 -220 C 40 -130 175 -190 175 -30 C 175 15 130 15 130 50" },
                ease:"power2.in",
            },);
    },[])
  return (
    <></>
  )
}

export default Animation