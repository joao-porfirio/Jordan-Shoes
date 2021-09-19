import React from 'react'
import Produto from '../Produto/Produto'

const Destaques = () => {
  return (
    <article className="destaques">
      <div className="destaques__info">
        <h1 className="destaques__titulo">Destaques</h1>
        <p className="destaques__texto">
          Frete grátis e chinelo de brinde é aqui, 
          aproveite por tempo limitado.
        </p>
      </div>
      <Produto />
    </article>
  )
}

export default Destaques
