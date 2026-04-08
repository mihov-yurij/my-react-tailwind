import { useState } from 'react';
import reactLogo from '../assets/react.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <img src={reactLogo} alt="Logo" className="logo-img" />
          <span>ReactApp</span>
        </div>

        {/* Кнопка Бургера */}
        <button className={`burger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигация с динамическим классом */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#form" onClick={() => setIsOpen(false)}>Register</a>
          <a href="#about" className="btn-contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}


