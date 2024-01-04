import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import {motion} from 'framer-motion'


const Hero = () => {
  const transition={duration:3,type:"spring"}
  return (
    <div className={css.container}>
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection Cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has suitable disposable and boy. excercise joy man chi rejoiced.</span>
            </div>
        </div>
        <div className={css.wrapper}>
            <motion.div initial={{bottom:'2rem'}} whileInView={{bottom:"0rem"}} transition={transition} 
            className={css.blueCircle}></motion.div>
               <motion.img  animate={{ x: -7,y: -35,scale: 1,rotate: 0,}} transition={transition} src={HeroImg} alt="" width={600} />
               <motion.div initial={{right:'40%'}} whileInView={{right:"1%"}} transition={transition} className={css.cart2}>
               <RiShoppingBagFill />
                 <div className={css.signup}>
                  <span>Best Signup Offers</span>
                 <div className={css.arrow}>
                 <BsArrowRight />
               </div>
            </div>
            </motion.div>
            </div>
            <div className={css.h_sides}>
              <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Target</span>
              </div>
              <div className={css.customer}>
                 <span>100k</span>
                 <span>Happy customer</span>
              </div>
            </div>
        </div>
  )
}

export default Hero