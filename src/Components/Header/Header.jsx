import React from 'react'
import '../../css/style.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header__desconto">
       <span className="header__desconto-info">Ganhe R$ 10,00 de desconto no frete</span>
      </div>
      <nav className="header__nav">
        <h1 className="header__marca">Jordan Shoes</h1>
      </nav>
    </header>
  )
}

export default Header
