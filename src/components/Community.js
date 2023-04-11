import React, {useState, useEffect, Fragment} from 'react'
// styles
import styles from "../styles/Community.module.css"

import { motion, useAnimation } from "framer-motion"

// components
import ReviewCard from '@/components/reviewCard'; 

export default function Community(props) {
    const [reviews, setReviews] = useState(null);
    const control = useAnimation();

    useEffect(()=> {
        setReviews(()=> props.reviewsData)
    },[])

    
    const myVariant = {
        hidden: {
            opacity:0,
             y: 500
        },
        visible:{
            opacity:  1,
            y:0
        },
    }
    

    return (
        <Fragment>
            <div className='container'>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <motion.div animate={{x: props.target == "community" ? 0 : -1000}} initial={{x: -1000}} transition={{duration:1.4}}><h1>MEET OUR<br/><span className={styles.community}>COMMUNITY</span></h1></motion.div>
                        <motion.div animate={{y: props.target == "community" ? 0 : 100, opacity:props.target == "community" ? 1 : 0}} initial={{y: 100, opacity:0}} transition={{duration:.5, delay:.8}} >
                            <p className={styles.knowMore}>KNOW MORE</p>
                            <p className={styles.titleDescription}>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.reviewsContainer}>
                   
                    { 
                        reviews && reviews.map((review, i)=> (
                            <motion.div className={styles.reviewCard}
                                key={review.id}
                                variants={ myVariant}
                                initial='hidden'
                                animate={props.target == "community" ? {y:0, opacity: 1} : {}}
                                transition={{delay:i * 0.3, duration:1.5, stiffness:300}}
                            >
                                <ReviewCard 
                                    startAnimation={props.isInView}
                                    id={review.id}
                                    image="/images/Image_52.png" 
                                    title={review.title}
                                    cardContent={review.content}
                                    commentsCount={review.commentsCount}
                                    likesCount={parseInt(review.likesCount)}
                                    detailCrosses={i == 0 ? "large" : i == 1 ? "small" : null}
                                    detailStripes={i == 0 ? "true" : null}
                                />
                            </motion.div>
                            
                        ))
                    }
                   
                </div>
            </div>
        </Fragment>
    )
}

