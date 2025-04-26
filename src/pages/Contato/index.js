import React from "react"
import * as styles from "./contato.module.css"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Contato() {
    return (
        <Layout>
           <div className={styles.page}>
           <section className={styles.mainContainer}>
                <h1>Onde nos encontrar?</h1>
                <div className={styles.image}>
                <StaticImage
                    src="../../images/cafe-place.png"
                    alt="Café Sem Filtro"
                    placeholder="blurred"
                    layout="constrained"
                    quality={90}
                    width={350}
                />
                </div>
                <section className={styles.informations}>
                    <div className={styles.informationsItems}>
                        <StaticImage
                        src="../../images/watch-asset.png"
                        alt="Horários"
                        placeholder="blurred"
                        layout="constrained"
                        quality={90}
                        />
                        <p>
                        06:00 -  19:00 <br/> Seg a Sáb.
                        </p>
                    </div>

                    <div className={styles.informationsItems}>
                        <StaticImage
                        src="../../images/map-asset.png"
                        alt="Horários"
                        placeholder="blurred"
                        layout="constrained"
                        quality={90}
                        />
                        <p>
                        Rua dos Grãos de Café <br/> CEP 12345-678
                        </p>
                    </div>
                </section>
            </section>

            <section className={styles.contact}>
                <div className={styles.zap}>
                <section>
                    <StaticImage
                        src="../../images/zap-asset.png"
                        alt="Whatsapp"
                        placeholder="blurred"
                        layout="constrained"
                        quality={100}
                        width={60}
                />
                <p>  (11) 99140-7988 </p>
                    </section>
                </div>

                <div className={styles.insta}>
                    <section>
                    <StaticImage
                        src="../../images/insta-asset.png"
                        alt="Horários"
                        placeholder="blurred"
                        layout="constrained"
                        quality={100}
                        width={60}
                />
                <p> @CAFESEMFILTRO </p>
                    </section>
                </div>
            </section>
           </div>
        </Layout>
    )
}