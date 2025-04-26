import React from "react"
import * as styles from "./cardassinatura.module.css"
import { Link } from "gatsby"


export default function CardAssinatura({imageName, plan, list1, list2, list3, price }) {
    const imageSrc = require(`../../images/${imageName}`).default

    return (
        <div className={styles.card}>
            <section>
                <img className={styles.image} src={imageSrc} alt="Imagem do plano de assinatura"/>
                <h3>{plan}</h3>
            </section>

            <section className={styles.listSection}>
                <ul>
                    <li className={styles.list}>{list1}</li>
                    <li className={styles.list}>{list2}</li>
                    <li className={styles.list}>{list3}</li>
                </ul>
            </section>

            <h4 className={styles.price}>R$ {price}</h4>

            <Link to="/" className="LinkClass">ASSINAR</Link>
        </div>
    )
}