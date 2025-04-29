import CardCoffe from "../../components/CardCoffe";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as styles from "./menu.module.css"
import React from "react"

export default function Menu(){
    return (
        <Layout>
              <Seo title="Menu" description="Página Menu destinada a fornecer o MENU da cafeteria."/>
            <div className={styles.page}>
                <section className={styles.mainContainer}>
                    <div className={styles.nutsInformation}>
                        <h1>MENU</h1>
                        <p>OBSERVAÇÃO: PEDIDO VIA WHATSAPP</p>
                    </div>

                    <div className={styles.nutsCards}>
                        <CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/AMERICANOSCOFFEE.png"
                         name="LUGGO"
                         list1="Forte"
                         list2="Amargo"
                         list3="Delicioso e Simples"
                         price="27,79"
                         />
                         <CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/Vanilla_Latte_ContactShadow_Cream_0.png"
                         name="LATTE"
                         list1="Suave"
                         list2="Adocicado"
                         list3="Toque Clássico"
                         price="45,79"
                         />
                         <CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/LATTEICED.png"
                         name="ICED LATTE"
                         list1="Suave"
                         list2="Fresco"
                         list3="Equilibrado"
                         price="34,79"
                         />
                         <CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/TCAPPUCCINO.png"
                         name="CAPPUCCINO"
                         list1="Suave"
                         list2="Doce"
                         list3="Clássico Carimbado"
                         price="34,79"
                         /><CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/SPARKLINGEXPRESS_1.png"
                         name="MINT ESPRESS"
                         list1="Forte"
                         list2="Ardido"
                         list3="Refrescante"
                         price="34,79"
                         />
                         <CardCoffe
                         imageUrl="https://www.starbucksathome.com/br/media/recipe/LATTEICED.png"
                         name="COLD BREW"
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