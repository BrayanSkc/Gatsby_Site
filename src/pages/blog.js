import React, { useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { gsap } from "gsap"

const SecondPage = () => {
  useEffect(() => {
    var tl = gsap.timeline()
    tl.to(".paragraph-one", { delay: 1.3, duration: 2, x: 20 })
      .to(".paragraph-two", { duration: 2, x: 20 }, "-=1")
      .to(".paragraph-three", { duration: 2, x: 20 }, "-=1")
      .to(".paragraph-four", { duration: 2, x: 20 }, "-=1")
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <h1 style={{ textAlign: "center" }}>Blog</h1>
      <p className="paragraph-one">
        Phasellus dictum vitae sapien eu viverra. Integer in felis eget lacus
        sollicitudin euismod. Curabitur pellentesque ultricies ornare. Integer
        non eros velit. Donec gravida eleifend lorem, sit amet porttitor ipsum
        sodales vitae. Sed eget quam mi. Sed eu viverra nunc. Aliquam at nibh
        nisi. Mauris venenatis malesuada lacus, eu porttitor massa dapibus eu.
        Nulla facilisi. Morbi interdum, enim posuere ullamcorper varius, sapien
        leo luctus ex, ut maximus velit velit eget leo.
      </p>
      <p className="paragraph-two">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        imperdiet vestibulum lectus at finibus. Phasellus tincidunt nulla at
        eros fringilla posuere. Cras ligula nibh, viverra vitae dictum nec,
        bibendum sit amet ex. Nullam tempus risus et orci volutpat, a
        pellentesque sem iaculis. Quisque justo leo, semper vestibulum posuere
        ac, laoreet et nunc. Donec consectetur velit facilisis ante porta
        malesuada. Donec justo dui, pretium non ante sit amet, dapibus egestas
        nulla. Nullam et libero ac mauris interdum consequat. Sed fermentum orci
        odio, ac condimentum ipsum tincidunt et. In eget pellentesque risus.
        Maecenas ligula velit, lobortis ac metus id, hendrerit rhoncus odio.
        Duis nec interdum diam. Pellentesque ultricies enim orci, a volutpat
        nisl mollis ut.
      </p>
      <p className="paragraph-three">
        Phasellus dictum vitae sapien eu viverra. Integer in felis eget lacus
        sollicitudin euismod. Curabitur pellentesque ultricies ornare. Integer
        non eros velit. Donec gravida eleifend lorem, sit amet porttitor ipsum
        sodales vitae. Sed eget quam mi. Sed eu viverra nunc. Aliquam at nibh
        nisi. Mauris venenatis malesuada lacus, eu porttitor massa dapibus eu.
        Nulla facilisi. Morbi interdum, enim posuere ullamcorper varius, sapien
        leo luctus ex, ut maximus velit velit eget leo.
      </p>
      <p className="paragraph-four">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        imperdiet vestibulum lectus at finibus. Phasellus tincidunt nulla at
        eros fringilla posuere. Cras ligula nibh, viverra vitae dictum nec,
        bibendum sit amet ex. Nullam tempus risus et orci volutpat, a
        pellentesque sem iaculis. Quisque justo leo, semper vestibulum posuere
        ac, laoreet et nunc. Donec consectetur velit facilisis ante porta
        malesuada. Donec justo dui, pretium non ante sit amet, dapibus egestas
        nulla. Nullam et libero ac mauris interdum consequat. Sed fermentum orci
        odio, ac condimentum ipsum tincidunt et. In eget pellentesque risus.
        Maecenas ligula velit, lobortis ac metus id, hendrerit rhoncus odio.
        Duis nec interdum diam. Pellentesque ultricies enim orci, a volutpat
        nisl mollis ut.
      </p>
      <AniLink swipe top="entry" to="/" entryOffset={80} duration={1}>
        Go back to the homepage
      </AniLink>
    </Layout>
  )
}

export default SecondPage
