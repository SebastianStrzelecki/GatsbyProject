import React from 'react'
import HeaderLink from './header-link.js'

const Navbar = ({ siteTitle }) => (


  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav"> 
    <div className="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
         <HeaderLink links="/" textLink="Strona Główna"></HeaderLink>
         <HeaderLink links="page-2" textLink="Strona2"></HeaderLink>
        </ul>  
        </div>
    </div>
  </nav>
)



export default Navbar
