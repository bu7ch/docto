import { FC } from "react"
import '../layout.css'
export const Layout:FC<{children:any}> = ({children})=> {
  return (
    <div  className="main">
      <div className="layout">
        <div className="sidebar">
          sidebar
        </div>
        <div className="content">
          <div className="header">header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  )
}

