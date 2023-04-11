import React, {useState} from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

import { useRouter, } from 'next/router'
// import { useSpring, animated } from '@react-spring/web'
function Burger() {
  const [active, setActive] = useState(false);

    
    return ( 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="60"
        fill="none"
        viewBox="-133 60 260 1"
      >
        <g fill="#000" fillRule="evenodd" clipRule="evenodd">
          <path d="M120.69 62.215c.17.29.26.6.26.93 0 .21-.01.44-.02.67.02.23.02.46.02.67 0 .33-.09.64-.26.93-.92 4.01-4.6 9.26-15.9 9.26H17.11c-11.31 0-14.98-5.24-15.9-9.26-.17-.29-.26-.6-.26-.93 0-.21.01-.44.02-.67-.02-.23-.02-.46-.02-.67 0-.33.09-.64.26-.93.92-4.01 4.6-9.26 15.9-9.26h45.4l16.74 17.29 16.63-17.29h8.91c11.31.01 14.98 5.25 15.9 9.26z"></path>
        </g>
        <g fill="#000" fillRule="evenodd" clipRule="evenodd">
          <path
            d= "M89.42 14.1a6.22 6.22 0 11-6.22 6.22c.01-3.43 2.79-6.22 6.22-6.22zm-54.22.44a6.22 6.22 0 11-6.22 6.22c0-3.44 2.78-6.22 6.22-6.22zm26.89-5.93a6.22 6.22 0 11-6.22 6.22c.01-3.44 2.79-6.22 6.22-6.22zm50.41 36.52H12.44C6.08 45.13.87 39.93.87 33.57.87 17.1 33.68.78 61.23.5c54.21-.54 78.54 44.63 51.27 44.63z">
        </path>
        </g>
          <g  fill="#000" fillRule="evenodd" clipRule="evenodd">
          <path d="M5.03 83.555c37.32-.07 74.61-.11 111.93 0 2.22.01 4.04 1.82 4.04 4.04 0 6.03-2.53 17.83-16.17 17.83H17.15c-13.64 0-16.17-11.8-16.17-17.83 0-2.22 1.82-4.03 4.05-4.04z"></path>
        </g>
      </svg>
    );
  }

function Navbar() {
    const router = useRouter()
    const navLinks = ["about", "community", "location", "our menu", "recipes"]
    
    function test(){
        router.push('/?step=2', null, { shallow: true })
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLinks}>
                <Image src="/logo.svg" height={60} width={60} alt="The best foodie experience awesome logo" />
                <ul className={styles.leftMenu}>
                    {navLinks.map((el, _i)=> (
                       <li key={_i}><a onClick={()=> test()}>{el}</a></li>
                    ))}
                </ul>
                <div className={styles.rightMenu}>
                    <ul className={styles.navRight}>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className={styles.burgerIcon}>
                <Burger/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
