import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion"



function RevelAnim({ element }) {
    const ref = useRef(null);
    const isInView=useInView(ref,{once:true});
    const mainControls = useAnimation();
    const slidControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
            slidControls.start('visible')
        }
    },[isInView])

    return (
        <div className="relative overflow-hidden w-fit" ref={ref}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration:0.5 , delay:0.1}}
            >{element}</motion.div>

            {/* Revel Anim */}
            <motion.div 
                variants={{
                    hidden:{right:0},
                    visible:{right:"100%"}
                }}
                initial="hidden"
                animate={slidControls}
                transition={{duration:0.5 , ease:"easeIn"}}
                className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-gray-100 "
            
            >

            </motion.div>
        </div>
    )
}

export default RevelAnim

