import React from 'react'
import banner from '../../assets/img/wallpaper.jpeg';
const Main = () => {
  return (
    <section>
      <main className="main">
        <article className="main__info">
          <img src={banner} alt="" className="main__banner" />
        </article>
        <aside className="main__banner-content">
          <h2 className="main__banner-bord">A melhor loja de Jordan</h2>
          <p className="main__banner-text">O tênis Jordan é fruto de uma velha e forte<br/> 
          parceria entre a Nike e o jogador Michael Jordan.</p>
        </aside>
      </main> 
    </section>
  )
}

export default Main
