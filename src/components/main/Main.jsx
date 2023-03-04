import React from 'react'
import Header from '../header/Header'
import './Main.css'
import Post from '../post/Post'
// import SideNav from "../sidenav/SideNav"
function Main() {
  return (
    <div className="main">
      {/* <SideNav /> */}
      <Header />
      <Post />
    </div>
  )
}

export default Main
