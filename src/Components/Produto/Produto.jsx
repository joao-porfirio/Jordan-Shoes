import React from 'react'
import jordan_1 from '../../assets/img/1.png'
import jordan_2 from '../../assets/img/2.png'
import jordan_3 from '../../assets/img/3.png'
import jordan_4 from '../../assets/img/4.png'
import jordan_5 from '../../assets/img/5.png'
import jordan_6 from '../../assets/img/6.png'
import jordan_7 from '../../assets/img/7.png'
import jordan_8 from '../../assets/img/8.png'

const Produto = (props) => {
  return (
    <section className="card">          
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_1} alt="A banana that looks like a bird"/>
        </picture>   
      </article>
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_2} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_3} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_4} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_5} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_6} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_7} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_8} alt="A banana that looks like a bird"/>
        </picture>
      </article>       
    </section>
  )
}

export default Produto
