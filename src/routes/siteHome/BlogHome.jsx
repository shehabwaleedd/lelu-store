import React from "react"
import Home from "../../pages/main/Main"
import { motion } from "framer-motion"
import ParallaxTextAnimation from "../../navItems/parralexTextAnimation/ParralexTextAnimation.tsx"
import Brag from "../../pages/brag/Brag"
import Picks from "../../pages/picks/Picks"
import TopPicks from "../../pages/topPicks/TopPicks"
import Sales from "../../components/sales/Sales"
import MainProducts from "../../pages/mainProducts/MainProducts"
import Insurance from "../../pages/insurance/Insurance"
import Awareness from "../../pages/awareness/Awareness"
import Testimonials from "../../pages/testimonials/Testimonials"
import Mission from "../../pages/mission/Mission"

export const BlogHome = () => {



  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <div>
      <motion.div>
        <Picks />
        <Home />
        <Awareness />
        <Mission />
        <MainProducts />
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0, transition: { delay: 1, ...transition } }} exit={{ opacity: 1 }} transition={transition}>
          <ParallaxTextAnimation />
        </motion.div>
        <Brag />
        <TopPicks />
        <Insurance />
        <Sales />
        <Testimonials />
      </motion.div>
    </div >
  )
}


