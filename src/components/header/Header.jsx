import React from "react";
import "./Header.css";

import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();


 
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>
            <a href="/r/popular" className="active">
              Popular
            </a>
          </li>
          <li>
            <a href="/r/hot">Hot</a>
          </li>
          <li>
            <a href="/r/rising">Rising</a>
          </li>
          <li>
            <a href="/r/controversial">Controversial</a>
          </li>
          <li>
            <a href="/r/gilded">Glided</a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <i className="fas fa-bell"></i>
        {/* <img src=""  alt="img"/> */}
        <div className="header__user">
       {isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
       : <button onClick={() => loginWithRedirect()}>Log In</button> }
          {/* <i className="fas fa-caret-down"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
