import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contactanos' title='Obtenga ayuda y soporte amigable' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Llenar formulario</h4> <br />
            <div>
              <input type='text' placeholder='Nombre' />
              <input type='text' placeholder='Email' />
            </div>
            <textarea cols='30' rows='10' placeholder='Texto'></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
