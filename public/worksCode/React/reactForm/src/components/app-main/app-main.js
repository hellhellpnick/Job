import React from "react"

import "./app-main.scss"

import AppForm from "./app-form"
import AppNext from "./app-next"
import AppAppointment from "./app-appointment"

function AppMain({CenterBlock}) {
  return (
    <main className="main">
      <div className="main__block">
        <h2 className="get-in-touch__title">Get in touch</h2>
        <h3 className="get-in-touch__subtitle">Let us know <br></br> how we can help</h3>
      </div>
        <CenterBlock className="main__wrapper">
          <AppForm CenterBlock={CenterBlock}/>
          <AppNext />
        </CenterBlock>
        <AppAppointment/>
    </main>
    )
}
;
export default AppMain; 