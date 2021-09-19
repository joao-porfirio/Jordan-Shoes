import Typed from "typed.js";
import React, {useEffect, useRef} from 'react'
const Main = () => {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <article className="article">
      </article> 
        <figcaption className="banner">
          <h2 className="banner__titulo">A melhor loja de Jordan</h2>
          <p className="banner__texto" ref={el}></p>
        </figcaption>
    </main>
  )
}

export default Main
