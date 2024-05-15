import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Tipos de propiedades destacadas' subtitle='Consigue todo tipo de propiedades.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
