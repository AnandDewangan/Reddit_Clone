import React from 'react'
import './SideNav.css'
// import Main from "../main/Main"
function SideNav() {
  const menus = [
    { to: '/r/popular', text: "Popular" },
    { to: '/r/all', text: "All" },
    { to: '/r/random', text: "Random" }
  ]
  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayilearned",
    "pics",
    "gaming",
    "movies",
    "news",
    "gifs",
    "aww",
    "mildlyinteresting",
    "television",
    "jokes",
    "science",
    "soccer",
    "internetisbeautiful",
    "showerthoughts",
    "detaisbeautiful"
  ]
  return (
    <>
      <div className="sidenav">
        <div className="sidenav__logo">
          <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg" alt="logo" />
        </div>
        <div className="sidenav__search">
          <input type="text" name="search" placeholder='Search' />
          <i className="fas fa-search"></i>
        </div>
        <div className="sidenav__link">
          <ul className='sidenav__menu'>
            {menus.map(menu => (
              <li><a href={menu.to}>{menu.text}</a></li>
            ))}
          </ul>
          <hr />
          <ul className='sidenav__subreddit'>
            {subreddits.map((subreddit, index) => {
              return (
                <li ><a href={`/r/${subreddit}`} key={index}>{subreddit}</a></li>
              )
            })}
          </ul>
        </div>


      </div>
      {/* <Main /> */}
    </>
  )
}

export default SideNav
