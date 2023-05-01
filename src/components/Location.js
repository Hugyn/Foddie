import React, {useEffect, useRef, useState} from 'react'
// styles
import styles from "../styles/Location.module.css"
import {Map, Marker, NavigationControl, Pin} from 'react-map-gl';
import { motion, useAnimation } from "framer-motion"

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN; // Set your mapbox token here

const Location = (props) => {
    const [map, setMap] = useState(null)
    const [focus, setFocus] = useState(false)
    const mapRef = useRef()
    

    
    useEffect(()=> {
        map && props.target == "location" && map.current.flyTo({center:[-0.13714640291778565, 51.50908434642357], zoom: 15, screenSpeed:1})
       props.target == "location" ? setFocus(true) : null
    },[map, props])
  return (
    <div className={styles.locationSection}>
        <div className='container'>
            <div className={styles.locationTitleSection}>
                <h1 className={styles.title}>Find Us</h1>
                <p className={styles.knowMore}>KNOW MORE</p>
            </div>
            
            <Map
                onLoad={()=>setMap(mapRef)}
                maxZoom={15}
                ref={mapRef}
                initialViewState={{
                longitude: -0.13714640291778565,
                latitude: 51.50908434642357,
                zoom: 8
                }}
                style={{width: '100%', height: 500}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={props.mapBoxToken}
            >
                    <Marker 
                        longitude={ -0.13714640291778565}
                        latitude={51.50908434642357}
                        pitchAlignment='map'
                        anchor="bottom" 
                    >
                        <motion.img height={80} animate={{y: focus ? 0 : -100, opacity:focus ? 1 : 0}} initial={{y: -100, opacity:0}} transition={{delay:3}} src='icons/pin.png'/>
                    </Marker>
            </Map>
          
        </div>
        
  </div>
  )
}

export default Location
