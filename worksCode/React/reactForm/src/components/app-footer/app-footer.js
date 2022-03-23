import React from "react"

import "./app-footer.scss"
import AppFooterContent from "./app-footer-content"
import AppFooterLink from "./app-footer-link"

function AppFooter({CenterBlock}) {
  return (
    <footer className="footer">
        <CenterBlock>
            <AppFooterContent/>
        </CenterBlock>
            <AppFooterLink/>
    </footer>
    )
}
;
export default AppFooter; 