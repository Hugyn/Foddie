import { useState, useEffect, Children } from 'react';
import absoluteUrl from 'next-absolute-url'
import { InView } from 'react-intersection-observer';

import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Navbar from '@/components/navbar'
import Landing from '@/components/Landing'
import Community from '@/components/Community'
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Observer from '@/components/Observer';



export default function Home(props) {
  const [target, setTarget] = useState("landing")
  return (
    <>
      <Head>
        <title>Foodie</title>
        <meta name="description" content="Foodie - The best food experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" /> 
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <Observer onChange={(inView, entry)=> inView ?  setTarget(entry.target.id): null}>
          <Landing key="landing" target={target}/>
          <Community reviewsData={props.reviews} key="community" target={target}/>
          <Menu key="menu"/>
          <Footer key="footer"/>
        </Observer>
      </main>
    </>
  )
}

export async function getServerSideProps({req}){
  
  const { origin } = absoluteUrl(req, "localhost:3000")
  const apiURL = `${origin}/api/reviews`
  const response = await fetch(apiURL);
  const reviewsData = await response.json();
  
  return {
    props: {
      reviews:reviewsData.default,
    }
  }
} 
