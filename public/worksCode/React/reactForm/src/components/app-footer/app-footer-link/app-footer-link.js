import React from "react"

import "./app-footer-link.scss"

function AppFooterLink() {
  return (
    <div className="footer-link">
      <div className="footer-link__wrapper">
      <div className="footer-links">
                <a href="#" className="footer-links__item">Services</a>
                <a href="#" className="footer-links__item">Experience</a>
                <a href="#" className="footer-links__item">Foundation</a>
                <a href="#" className="footer-links__item">Team</a>
                <a href="#" className="footer-links__item">Blog</a>
      </div>
      <p className="footer-link__text">© MadAppGang Pty Ltd, 2020</p>
      </div>
    </div>
    )
}
;
export default AppFooterLink; 