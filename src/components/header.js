import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ menuLinks, siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      height:'4rem'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                margin: "0 1rem",
                listStyle: "none",
              }}
            >
              <AniLink
                paintDrip
                to={link.link}
                duration={2}
                hex={"#b04bf4"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {link.name}
              </AniLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
