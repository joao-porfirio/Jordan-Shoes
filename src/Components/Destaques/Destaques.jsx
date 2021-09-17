import React from 'react'
import Produto from '../Produto/Produto'
import jordan_1 from '../../assets/img/1.png'
import jordan_2 from '../../assets/img/2.png'
import jordan_3 from '../../assets/img/3.png'
import jordan_4 from '../../assets/img/4.png'
import jordan_5 from '../../assets/img/5.png'
import jordan_6 from '../../assets/img/6.png'
import jordan_7 from '../../assets/img/7.png'

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
      <Produto src={jordan_1} alt="123"/>
      <Produto src={jordan_2} alt="123"/>
      <Produto src={jordan_3} alt="123"/>
      <Produto src={jordan_4} alt="123"/>
    </article>
  )
}

export default Destaques
