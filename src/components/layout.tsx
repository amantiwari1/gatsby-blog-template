import * as React from "react"
import { GlobalStyles } from "twin.macro"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <main>{children}</main>
    </div>
  )
}

export default Layout
