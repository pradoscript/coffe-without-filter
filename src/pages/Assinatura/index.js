import React from "react"
import * as styles from "./assinatura.module.css"
import Layout from "../../components/layout"
import CardAssinatura from "../../components/CardAssinatura"

export default function Assinatura() {
    return (
        <Layout>
            <Seo title="Assinatura" description="Página Assinatura destinada a fornecer as opções de assinatura da cafeteria."/>
            <div className={styles.page}>
                <section>

                    <div className={styles.nutsInformation}>
                        <h1>Assinaturas</h1>
                        <p>
                            *ADQUIRA NOSSA ASSINATURA E RECEBA 2 PACOTES DE CAFÉ TODOS OS MESÊS!* <br />
                            ALÉM DOS PACOTES, VOCÊ GANHA DESCONTOS ACUMULATIVOS EM NOSSA CAFETERIA
                        </p>
                    </div>

                    <div className={styles.nutsCards}>
                        <CardAssinatura
                            imageName="standard.png"
                            plan="PLANO STANDARD"
                            list1="2 PACOTES"
                            list2="NACIONAL"
                            list3="SORTIDOS"
                            price="137,79"
                        />

                        <CardAssinatura
                            imageName="medium.png"
                            plan="PLANO MEDIUM"
                            list1="2 PACOTES"
                            list2="INTERNACIONAL"
                            list3="SORTIDOS"
                            price="237,79"
                        />

                        <CardAssinatura
                            imageName="premium.png"
                            plan="PLANO PREMIUM"
                            list1="2 PACOTES"
                            list2="NACIONAL"
                            list3="SORTIDOS"
                            price="337,79"
                        />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
