import "../assets/css/style.css"
import "../assets/css/custom.css"
import "../assets/css/components.css"
import "../assets/css/app.min.css"
import "../assets/css/Kmachilik.css"

import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
export default function MainLayout() {
  const [list, setList] = useState(false)
  const [qongiroq, setqongiroq] = useState(true)
  const [User, setUser] = useState(false)
  return (
    <body class={list ? "light light-sidebar theme-white sidebar-mini" : "light light-sidebar theme-white"}>
      <div id="app">
        <div class="main-wrapper main-wrapper-1">
          <div class="navbar-bg"></div>
          <Nav list={list} setList={setList} qongiroq={qongiroq} setqongiroq={setqongiroq} User={User} setUser={setUser}/>
          <Sidebar/>
            <Outlet />
            <Footer/>
        </div>
      </div>
    </body>
  )
}

