import React from "react"
import * as styles from "./home.module.css"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



export default function Home(){

  return (
    <Layout>
      <div className={`${styles.page} ${styles.pageHero}`}>
        <main className={styles.hero}>
            <h1>
                Cada <span>grão</span> uma <span>história</span>. <br/>
                Cada <span>gole</span>, um mundo de <span>sabor</span> e <span>experiência</span>.    
            </h1>
            <a className={styles.LinkClassHome} href="https://wa.me/5511991407988?text=Olá, gostaria de conhecer vocês!">CONHEÇA-NOS</a >
        </main>
      </div>

      <div className={`${styles.page} ${styles.page1}`}>
        <main className={styles.sectionContent}>
          <h1>CARINHO NO PREPARO</h1>
          <p>
          Valorizamos cada etapa do processo para oferecer a você o melhor café. Trabalhamos com fornecedores locais que adotam práticas de cultivo sustentável, respeitando o meio ambiente e as comunidades envolvidas. Nossos grãos são cuidadosamente selecionados, garantindo qualidade superior e compromisso com o comércio justo. Cada xícara que você saboreia carrega uma história de respeito, responsabilidade e paixão pelo café.
          </p>
          <Link className={styles.LinkClassHome} to="/Contato">VISITE-NOS</Link >
        </main>

        <div className={styles.caffeAsset1}>
          <StaticImage
          src="../../images/asset-cafe1.png"
          alt="Logo Café Sem Filtro"
          placeholder="blurred"
          layout="constrained"
        />
        </div>

      </div>

      <div className={`${styles.page} ${styles.page2}`}>

      <div className={styles.caffeAsset2}>
          <StaticImage
          src="../../images/asset-cafe2.png"
          alt="Logo Café Sem Filtro"
          placeholder="blurred"
          layout="constrained"
        />
        </div>

        <main className={styles.secondSectionContent}>
          <h1>O VERDADEIRO CAFÉ</h1>
          <p>
          Descubra o verdadeiro potencial do café com métodos que valorizam cada nota e aroma. <br/>
          Da intensidade da prensa francesa, à elegância do siphon, até a suavidade refrescante do cold brew — oferecemos uma experiência sensorial única em cada preparo. <br/>
          Explore novos sabores, escolha o seu ritual preferido e transforme sua rotina em um momento especial. <br/>
          </p>
          <Link className={styles.LinkClassHome} to="/Menu">EXPLORAR</Link >
        </main>
      </div>

      <div className={`${styles.page} ${styles.page3}`}>
        <main className={styles.thirdSectionContent}>
          <h1>WORKSHOPS SEM FILTRO</h1>
          <p>
          Mais do que café — conhecimento, prática e sabor. <br/>
          Nossos workshops de barista e sessões de degustação oferecem uma imersão na arte do preparo, onde você aprende, experimenta e se conecta com o universo do café. <br/>
          Uma experiência envolvente, educativa e cheia de aroma.
          </p>
          <a className={styles.LinkClassHome} target="_blank" href={`https://wa.me/5511991407988?text=Olá, gostaria de participar de um WORKSHOP!`}>PARTICIPAR</a >
        </main>

        <div className={styles.caffeAsset3}>
          <StaticImage
          src="../../images/asset-cafe3.png"
          alt="Logo Café Sem Filtro"
          placeholder="blurred"
          layout="constrained"
        />
        </div>
      </div>
   
    </Layout>
  )
   
}