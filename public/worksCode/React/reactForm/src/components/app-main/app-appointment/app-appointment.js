import React from "react"

import laptop from "./laptop.svg"
import "./app-appointment.scss"

function AppNext() {
  return (
    <section className="appointment">
        <div className="appointment__block">
            <h2 className="appointment__title">Or make an appointment</h2>
            <div className="appointment__img">
                <img src="https://images.prismic.io/testmadappgang/aa748e7a-bc5a-41a0-ae10-c2a83a2fc21b_tsholokh.jpg?auto=compress,format&rect=0,0,512,512&w=140&h=140" alt='avatar' />
            </div>
            <div className="appointment__wrapper">
                <p className="appointment__text">Want to immediately discuss the details? Make an appointment to our sales manager Tatiana.</p>
                <a href="#" className="appointment__btn">make an appointment</a>
            </div>
        </div>
        <div className="appointment__block">
            <h2 className="appointment__title">Visit us</h2>
            <p className="appointment__text appointment__text--visit">Our company management and business development team is located in Sydney, Australia. Our engineering team is located in Kremenchuk, Ukraine.</p>
        </div>
        <a href="#" className="appointment__laptop">
            <img src={laptop} alt={"laptop"}/>
        </a>
    </section>
    )
};

export default AppNext;