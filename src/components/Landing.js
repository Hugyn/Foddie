import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion'
import { InView } from 'react-intersection-observer';

 function Landing(props) {


  return (
      <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: props.target == "landing" ? 1 : 0 }}
        className={styles.home}
      >
        <div className={styles.homeBanner}>
          <div className={styles.logoStamp}>
            <Image src='/stamp_white.svg' width={190} height={190} alt="Stamp Logo"/>
          </div>
          <motion.div   
            initial={{ scale: 0, opacity:0 }}
            animate={{ scale: 1, opacity:1 }} 
            className={styles.homeHero}
          >
            <h1>The best foodie<br/><span>experience</span></h1>
            <h3>now in London</h3>
          </motion.div>
        </div>
      </motion.div>
  ) 
}
export default Landing;
