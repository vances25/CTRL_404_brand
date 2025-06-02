import "keen-slider/keen-slider.min.css"
import styles from "./style.module.css"


export default function Item({ }){
    return (
    <>
     <div className={`keen-slider__slide ${styles.slide}`}>
        <img src="https://placehold.co/600x400"></img>
        <p>title</p>
        <p>size</p>
        <p>color</p>
        <p>price</p>
     </div>
    </>
    )
}