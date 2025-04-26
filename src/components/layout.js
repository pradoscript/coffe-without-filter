import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "hamburger-react"
import "./layout.css"
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <main className='mainContent'>
      <nav className="nav">
        <div className="logoWrapper">
          <Link to="/">
          <StaticImage
          src="../images/logo.webp"
          alt="Logo Café Sem Filtro"
          placeholder="blurred"
          layout="constrained"
          className="logoImage"
        />
          </Link>
        </div>

        <div className="hamburger">
        <Hamburger
        size={24}
        toggled={open}
        toggle={setOpen}
        color="#FABD68"
        />
        </div>
        
        <div className={open ? " menu active" : " menu inactive"}>
          <ul >
            <li>
              <Link className="LinkNav" to="/Graos">Grãos</Link>
            </li>
            <li>
              <Link className="LinkNav" to="/Assinatura">Assinatura</Link>
            </li>
            <li>
              <Link className="LinkNav" to="/Contato">Contato</Link>
            </li>
          </ul>
        </div>

      </nav>
      {children}

      <footer className="footer">
      <p>Copyright &copy; 2025 Café Sem Filtro. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default Layout
