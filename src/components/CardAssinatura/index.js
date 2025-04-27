import React from "react"
import * as styles from "./cardassinatura.module.css"



export default function CardAssinatura({imageName, plan, list1, list2, list3, price }) {
    const imageSrc = require(`../../images/${imageName}`).default

    return (
        <div className={styles.card}>
            <section className={styles.topSectionCard}>
                <h3>{plan}</h3>
                <img className={styles.image} src={imageSrc} alt="Imagem do plano de assinatura"/>
            </section>

            <section className={styles.listSection}>
                <ul>
                    <li className={styles.list}>{list1}</li>
                    <li className={styles.list}>{list2}</li>
                    <li className={styles.list}>{list3}</li>
                </ul>
            </section>

            <h4 className={styles.price}>R$ {price}</h4>

            <a target="_blank" href={`https://wa.me/5511991407988?text=Olá, gostaria de assinar o ${plan}!`} className="LinkClass">ASSINAR</a>
        </div>
    )
}