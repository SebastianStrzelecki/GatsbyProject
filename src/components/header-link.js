import { Link } from 'gatsby'
import React from 'react'

const HeaderLink = ({ links, textLink }) => (
  <li className="nav-item">
        <Link
          to={links}
          className="nav-link js-scroll-trigger"
        >
          {textLink}
        </Link>
 </li>
        
      
   
)



export default HeaderLink
