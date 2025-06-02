import styles from "./style.module.css"


export default function Navbar(){
    return (
        <>
        <section className={`${styles.header}`}>
      <img src="/logo.png"></img>
      <div>
        <a href="/">Home</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact Us</a>
      </div>
    <img src="/cart.png"></img>
    </section>
        </>
    )
}