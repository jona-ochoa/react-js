import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container ">
        <Link href="/">
          <a className="navbar-brand" >Jonatan</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link" >Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link" >Github</a>
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
