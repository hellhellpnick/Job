import React from "react"

import "./app-header.scss"

function AppHeader({CenterBlock}) {
  return (
    <header className="header">
        <CenterBlock className="header__wrapper">
            <h1 className="header__logo">madappgang</h1>
            <nav className="menu">
                <a href="#" className="menu__item">Services</a>
                <a href="#" className="menu__item">Experience</a>
                <a href="#" className="menu__item">Foundation</a>
                <a href="#" className="menu__item">Team</a>
                <a href="#" className="menu__item">Blog</a>
            </nav>
            <button type="button" className='btn'>Get in touch</button>
        </CenterBlock>
    </header>
    )
}
;
export default AppHeader; 