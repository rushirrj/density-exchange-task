"use client";
import React from 'react'
import { motion } from "framer-motion";

const MeetAheadCard = () => {
  return (
    <div className='px-20 relative'>
        <div style={{height:"450px"}} className='bg-bgPeach overflow-hidden relative flex rounded-lg'>
            <div className=' basis-1/2 px-7'>
                <div className='flex flex-col mt-20 gap-3'>
                    <div><p className='text-md text-left'>Built Out of Frustration</p></div>
                    <div><p className='text-3xl font-bold'>Meet the ahead app</p></div>
                </div>
            </div>
            <div className='basis-1/2 flex items-center' >
                <div className='flex flex-col gap-3 w-4/5'>
                    <div><p className='text-lg'>A personalized pocket coach that provide bitesized,science-driven tools to boost emotional intelligence.</p></div>
                    <div><p>Think of it as a pocket cheerleader towards a better, more fulfilling.</p></div>
                </div>
            </div>

            {/* circle div  */}
            <motion.div
                whileInView="visible"
                initial={{ opacity: 1, x: 0,y:20 }} // Initial state of the div (at its starting position)
                animate={{
                x: [0, -420], // Animate from x: -340 to x: -35
                y: [55,-5 ], // Animate from y: -50 to y: -35
                }}
                transition={{
                type: 'tween', // Animation type
                duration: 0.8, // Duration for each animation step
                ease: 'easeInOut', // Easing function
                }}
            className='bg-darkPeach h-60 w-60 absolute rounded-full' 
            style={{bottom:"-16px",right:"650px"}}>

            </motion.div>

            {/* leaves division */}
            <motion.div
            whileInView="visible"
            initial={{y:55}}
            animate={{
                
                x: [0, 10], 
                y: [55,-5 ],
                rotate:25 
                }}
                transition={{
                type: 'tween', // Animation type
                duration: 0.8, // Duration for each animation step
                ease: 'easeInOut', // Easing function
                }}
            className='h-28 w-24 absolute' style={{right:"60%",top:"20%",transform:"translate(50%,50%)"}}><img src="leaf.png" alt="" /></motion.div>

            {/*GHost Div  */}
            <div style={{top:"62%",left:"20%",transform:"translate(-50%,-50%)"}} className='absolute  flex justify-center items-center rounded-full bg-white h-44 w-44 border-8 border-borderGrey'>
                <motion.div transition={{duration:'1.5'}} whileInView="visible" viewport={{ once: true }} variants={{visible: { rotate: [0,25,-15,0] },hidden: { opacity: 0, scale: 0.5, rotate: 0 },}} className='h-20 w-16 inline-block'><img src="newGhost.png" className='h-full w-full' alt="" /></motion.div>
                {/*Badge*/}
                <motion.div
                whileInView="visible"
                animate={{rotate:[-180,0,180,0]}}
                transition={{type:"spring",duration:"3",ease:"easeInOut"}}  
                className='absolute h-11 w-11'  style={{top:"-22px"}}>
                    <img src="badge.png" alt="" />
                </motion.div>
            </div>
        </div>
        {/* flower div */}
        <motion.div
              whileInView="visible"
              animate={{ rotate: 360 }} // Rotate 360 degrees
              transition={{
                loop: Infinity, // Loop the animation infinitely
                ease: 'linear', // Use a linear easing function for smooth rotation
                duration: 2, // Duration of 2 seconds per loop
              }} 
        style={{right:"280px",top:"-20px" }} className='h-11 w-11 absolute '>
            <img src="flower.png" alt="" />
        </motion.div>
    </div>
  )
}

export default MeetAheadCard