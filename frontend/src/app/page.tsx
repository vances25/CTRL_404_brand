"use client";

import styles from "./page.module.css";
import Navbar from "../../componets/Navbar/Navbar";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Item from "../../componets/Item/Item"



export default function Home() {


 const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  return (
    <>
    <div className={styles.container}>
    <Navbar/>

    <section className={`${styles.action}`}>
      <div className="fade-in">
        <h1>CTRL 404</h1>
        <p>Disconnected by Design.</p>
        <button onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}>SHOP NOW!</button>
      </div>
      <img className="fade-in" src="/zay.png"></img>
    </section>

    <section className={styles.mission}>
      <h1>Our Mission</h1>
      <p>We’re here to make looking good easy.
      No overpriced hype. No fake flex.
      Just clean, original fits that feel real — and stay affordable.
      </p>
      <img src="/trayvon.png"></img>
    </section>

    

    <section id="shop" className={styles.products}>
        <h1>Our Products</h1>
        <div ref={sliderRef} className={`keen-slider ${styles.slider_container}`}>
          <Item information={'1'}/>
          <Item information={'2'}/>
          <Item information={'3'}/>
          <Item information={'4'}/>
          <Item information={'5'}/>
          <Item information={'6'}/>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h1>Stay Connected</h1>
        <p>Sign up for drops, updates, and more.</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join</button>
        </div>
        <p>or reach us at: info@ctrl404.com</p>
        <p>© {new Date().getFullYear()} CTRL 404. All rights reserved.</p>
      </section>
      
    </div>
    </>
  );
}
