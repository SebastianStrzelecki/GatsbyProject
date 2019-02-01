import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'

import Footer from './footer'

import './layout.css'

const Layout = ({ children,footer="yes" }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Navbar siteTitle={data.site.siteMetadata.title}/>
     
        <div
          style={{
            margin: `0 auto`,
            
          }}
        >
          {children}
          {
            footer =="yes" && <Footer/>
          }
          
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
