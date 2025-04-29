import React from "react"
import * as styles from "./contato.module.css"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Contato() {
    return (
        <Layout>
            <Seo title="Contato" description="Página Contato destinada a fornecer o CONTATO da cafeteria."/>
            <div className={styles.page}>
                <section className={styles.mainContainer}>

                    <div className={styles.image}>
                        <h1>Onde nos encontrar?</h1>
                        <StaticImage
                            src="../../images/cafe-place.png"
                            alt="Café Sem Filtro"
                            placeholder="blurred"
                            layout="constrained"
                            quality={90}
                            width={720}
                        />
                    </div>
                    <section className={styles.informations}>

                        <div className={styles.informationsItems}>
                            <section>
                                <StaticImage
                                    src="../../images/watch-asset.png"
                                    alt="Horários"
                                    placeholder="blurred"
                                    layout="constrained"

                                />
                            </section>
                            <section>
                                <p>
                                    Segunda à Sabado <br /> 06h:00 às 19:00h
                                </p>
                            </section>
                        </div>

                        <div className={styles.informationsItems}>

                            <section>
                                <StaticImage
                                    src="../../images/phone-asset.png"
                                    alt="Horários"
                                    placeholder="blurred"
                                    layout="constrained"

                                />
                            </section>
                            <section>
                                <p>
                                    (11) 99140-7988
                                </p>
                            </section>

                        </div>

                        <div className={styles.informationsItems}>
                            <section>
                                <StaticImage
                                    src="../../images/map-asset.png"
                                    alt="Horários"
                                    placeholder="blurred"
                                    layout="constrained"

                                />
                            </section>
                            <section>
                                <p>
                                    Rua dos Grãos de Café <br /> CEP 12345-678
                                </p>
                            </section>
                        </div>

                    </section>

                </section>
            </div>
        </Layout>
    )
}