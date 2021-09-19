import React from 'react'
import Slide from 'react-reveal/Slide';

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
     <Slide left>
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_1} alt="A banana that looks like a bird"/>
        </picture>   
        <div className="card__content">
          <h2 className="card__content-titulo">Air Jordan</h2>
          <p className="card__content-descricao">Modelo 2021.</p>
        </div>
      </article>
      </Slide>

      <Slide left big>
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_2} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article>   
      </Slide>  
      
      <Slide right big>
      <article className="card__container">
        <picture className="card__thumbnail">
          <img src={jordan_3} alt="A banana that looks like a bird"/>
        </picture>
        <div className="card__content">
          <h2 className="card__content-titulo">Air Jordan</h2>
          <p className="card__content-descricao">Modelo 2021.</p>
        </div>
      </article>   
      </Slide>  
      <Slide right>   
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_4} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article>       
      </Slide> 
      <Slide left big>
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_5} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article>   
      </Slide>
      <Slide left big>   
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_6} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article> 
      </Slide>   
      <Slide right big>   
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_7} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article>  
      </Slide> 
      <Slide right big>   
        <article className="card__container">
          <picture className="card__thumbnail">
            <img src={jordan_8} alt="A banana that looks like a bird"/>
          </picture>
          <div className="card__content">
            <h2 className="card__content-titulo">Air Jordan</h2>
            <p className="card__content-descricao">Modelo 2021.</p>
          </div>
        </article>      
      </Slide>   
    </section>
  )
}

export default Produto
