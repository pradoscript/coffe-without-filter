import CardCoffe from "../../components/CardCoffe";
import Layout from "../../components/layout";
import * as styles from "./graos.module.css"
import React from "react"

export default function Graos(){
    return (
        <Layout>
            <div className={styles.page}>
                <section className={styles.mainContainer}>
                    <div className={styles.nutsInformation}>
                        <h1>GRÃOS</h1>
                        <p>OBSERVAÇÃO: É POSSÍVEL ADQUIRIR GRÃOS INTEIROS OU MOÍDOS!</p>
                    </div>

                    <div className={styles.nutsCards}>
                        <CardCoffe
                         imageUrl="https://img.grouponcdn.com/iam/9FbXsnmf7AC5cWVcNfgo/Xp-2048x1229/v1/t4200x2544.webp"
                         name="Canephoro"
                         list1="Forte"
                         list2="Amargo"
                         list3="Torra Escura"
                         price="27,79"
                         />
                         <CardCoffe
                         imageUrl="https://thumbs.dreamstime.com/b/tasse-kaffee-latte-38369612.jpg"
                         name="Libérico"
                         list1="Suave"
                         list2="Frutado"
                         list3="Torra Clara"
                         price="45,79"
                         />
                         <CardCoffe
                         imageUrl="https://torange.biz/photo/32/IMAGE/coffee-cup-32166.jpg"
                         name="Arábica"
                         list1="Suave"
                         list2="Doce"
                         list3="Torra Média"
                         price="34,79"
                         />
                         <CardCoffe
                         imageUrl="https://torange.biz/photo/32/IMAGE/coffee-cup-32166.jpg"
                         name="Arábica"
                         list1="Suave"
                         list2="Doce"
                         list3="Torra Média"
                         price="34,79"
                         /><CardCoffe
                         imageUrl="https://torange.biz/photo/32/IMAGE/coffee-cup-32166.jpg"
                         name="Arábica"
                         list1="Suave"
                         list2="Doce"
                         list3="Torra Média"
                         price="34,79"
                         />
                         <CardCoffe
                         imageUrl="https://torange.biz/photo/32/IMAGE/coffee-cup-32166.jpg"
                         name="Arábica"
                         list1="Suave"
                         list2="Doce"
                         list3="Torra Média"
                         price="34,79"
                         />
                    </div>
                </section>
            </div>
        </Layout>
    )
}