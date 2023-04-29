import React from 'react'
import { useInView } from 'react-intersection-observer';

import styles from "../styles/Footer.module.css"

function Footer() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.65,
      });
    return (
        <div ref={ref} className={styles.footerContent}>
            <div className="container">
                <div className={styles.topFooter}>
                    <div className={styles.collab}>
                        <p className={styles.title}>COLLABORATE</p>
                        <span className={styles.withUs}>WITH US</span>
                        <p className={styles.collabText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                  
                    <form className={styles.form}>
                        <div className={styles.inputs}>
                            <label>
                                NAME
                                <br/>
                                <input placeholder='name'/>
                            </label>
                            <label>
                                PHONE
                                <br/>
                                <input placeholder='PHONE'/>
                            </label>
                            <label>
                                EXPERIENCE
                                <br/>
                                <input placeholder='EXPERIENCE'/>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;
