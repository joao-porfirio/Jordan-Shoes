import React from 'react'

const Produto = (props) => {
  return (
    <section className="produtos">
      <div className="produtos__container">
        <div className="produtos__container-imagem">
          <img src={props.src} alt={props.alt} />
        </div>
      </div>
    </section>
  )
}

export default Produto
