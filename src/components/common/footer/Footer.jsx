import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Tienes alguna pregunta ?</h1>
            </div>
            <button className='btn5'>Contactanos</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Te podemos ayudar con algo ?</h2>
              <p>Recibe actualizaciones y descuentos todos los meses</p>

              <div className='input flex'>
                <input type='text' placeholder='Email' />
                <button>Subscribete</button>
              </div>
            </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <span>© 2023. Todo los derechos reservados.</span>
      </div>
    </>
  )
}

export default Footer
