import React from "react"

import mesg from "./mess.svg"
import "./app-footer-content.scss"

function AppFooterContent() {
  return (
    <div className="footer__block">
        <div className="footer__wrapper">
            <p className="footer__text">MadAppGang is a team of tech experts specializing in mobile technologies.<br/>
We develop applications for iOS, Android, WatchOS, tvOS, Wear OS, wearables, and provide loT system integration services. Our experience with mobile apps, artificial intelligence, and embedded system provides a uniquely powerful <br/>resource for our clients.</p>
            <p className="footer__text">We work with established businesses and startups who are seeking to innovate and improve customer experience. Over the past few years we`ve built solutions for fintech, healthcare, fitness, transportation, and communication industries.</p>
        </div>
        <div className="footer__wrapper">
            <h2 className="footer__title">Follow us</h2>
            <nav className="menu-links">
                <a href="https://www.facebook.com/madappgang" className="menu-links__item">
                    <img src="https://prismic-io.s3.amazonaws.com/testmadappgang/335e76c4-88bd-4520-972f-16c68067203c_social_facebook.svg"  alt="facebook"/>
                </a>
                <a href="https://twitter.com/madappgang" className="menu-links__item">
                    <img src="https://prismic-io.s3.amazonaws.com/testmadappgang/900281e3-11da-4641-8c0f-12e611efa92f_social_twitter.svg"  alt="twitter"/>
                </a>
                <a href="https://www.instagram.com/madappgang/" className="menu-links__item">
                    <img src="https://prismic-io.s3.amazonaws.com/testmadappgang/7c459fcf-a06a-4fe4-b4fa-c96f2f0ee269_social_instagram.svg"  alt="instagram"/>
                </a>
                <a href="https://medium.com/@i_49105" className="menu-links__item">
                    <img src="https://prismic-io.s3.amazonaws.com/testmadappgang/48810898-49a8-4d86-bacc-77171165b2c6_social_medium.svg"  alt="medium"/>
                </a>
            </nav >
        </div>
    <a href="#" className="footer__mail">
        <img src={mesg} alt={"mesg"}/>
    </a>
    </div>
    )
}
;
export default AppFooterContent; 