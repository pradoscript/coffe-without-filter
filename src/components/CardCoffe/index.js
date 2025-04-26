import React from "react"
import * as styles from "./card.module.css"
import { Link } from "gatsby"

export default function CardCoffe({imageUrl, name, list1, list2, list3, price}){
    return (
        <div className={styles.card}>
            <section className={styles.topSectionCard}>
                <h3>{name}</h3>
                <img className={styles.image} src={imageUrl} alt="Imagem do grão"/>
            </section>

            <section className={styles.listSection}>
                <ul>
                    <li  className={styles.list}>{list1}</li>
                    <li  className={styles.list}>{list2}</li>
                    <li  className={styles.list}>{list3}</li>
                </ul>
            </section>

            <section>
            <h4 className={styles.price}>R$ {price}</h4>
            </section>

            <section>
            <Link to="/" className={styles.LinkClassCard}>ENCOMENDAR</Link>
            </section>
        </div>
    )
}