import React, {useEffect, useState} from 'react'

import { ParallaxProvider, Parallax} from 'react-scroll-parallax';

import styles from '@/styles/Menu.module.css'

const menu = {
    starters:{
        quinoa_coquetttas: {
            description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)',
            price: 4.95
        },
        chifa_chicharrones: {
            description: 'Slow cooked, crispy pork belly with sweet soy sauce',
            price:6.95
        },
        calamares: {
            description: 'Crispy baby squid with pickled jalapeño miso salsa',
            price:6.95
        }
    },
    main_courses:{
        el_clasico: {
            description: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
            price:8.95
        },
        tiradito_callao: {
            description: 'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
            price: 8.95
        }
    
    },
    sides:{
        super_pollo: {
            description:'Marinated corn fed chicken pieces with rocotto salsa',
            price: 4.95
        },
        patatas_fritas: {
            description: 'Sweet potato fries with aji rocotto mayonnaise (v)',
            price: 3.95
        }
    },
    desserts:{
        icecream: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        },
        tiramisu: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        },
        chocolate_brownie: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        }
    }
}

function Menu(props) {

    const [paralax, setParallax] = useState("")
    useEffect(() => {
       setParallax([[90, -60], [-60, 90], [90, -60],[-60, 60]]);
    }, [])

    
    return (
       <div className='container'>
           <div className={styles.menu}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>OUR MENU</h1>
                    <p className={styles.knowMore}>KNOW MORE</p>
                </div>
                <ParallaxProvider>
                    <div className={styles.menuContainer}>
                         {Object.keys(menu).map((item, _i)=> {
                             return(
                                <div key={_i} id={item} className={styles.menuSection}>
                                     <Parallax translateY={paralax[_i]}>
                                            <h1 className={styles.menuSectionTitle}>{item.replace("_", " ")}</h1>
                                            {Object.keys(menu[item]).map((meal, _i)=> {
                                                return(
                                                   <div key={_i} className={styles.menuItem}>
                                                       <h3 className={styles.mealName}>{meal.replace("_", " ")}</h3>
                                                       <p className={styles.mealDescription}>{menu[item][meal].description}</p>
                                                       <span className={styles.mealPrice}>{menu[item][meal].price}</span>
                                                   </div>
                                                )
                                            })}
                                     </Parallax>
                                </div>
                             )
                         })}
                    </div>
                </ParallaxProvider>
           </div>
       </div>
    )
}

export default Menu;
