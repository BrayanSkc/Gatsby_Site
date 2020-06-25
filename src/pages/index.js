import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TimelineMax, Back, Elastic, gsap } from "gsap"

const IndexPage = () => {
  useEffect(() => {
    let tl = new TimelineMax({ onUpdate: updateSlider })
    tl.from(
      ".text-Home",
      4,
      { scale: 0.5, opacity: 0, x: -100, ease: Back.easeOut },
      0.5
    ).from("#image-Home", 1, { x:10 , opacity: 0, ease: Back.easeOut })

    // gsap.to("#image-Home", 3, {
    //   x: 50,
    //   delay: 2,
    //   ease: Elastic.easeOut,
    // })
  }, [])
  const updateSlider = () => {
    console.log("object")
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{ textAlign: "center" }}>Hi people</h1>
      <p className="text-Home">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        eleifend, tortor nec ultricies semper, turpis sapien aliquam metus, id
        faucibus arcu nulla at mauris. Duis id laoreet enim. Aliquam erat metus,
        consectetur interdum auctor auctor, porttitor id lorem. Suspendisse
        tincidunt orci purus, ac volutpat eros porttitor vel. Proin convallis
        turpis blandit faucibus hendrerit. Donec vitae ligula tortor. Nullam
        semper ullamcorper dui nec varius. Aliquam scelerisque, lectus sit amet
        laoreet accumsan, nunc ex sollicitudin est, in pharetra lorem tellus eu
        lorem. Nulla eu lectus neque. Maecenas vel urna ultricies, efficitur
        nunc non, varius eros. Proin pulvinar metus sit amet metus varius
        ornare. Sed turpis est, porta in elit eget, congue rutrum lacus. Aliquam
        tellus orci, suscipit non orci et, varius placerat eros. Cras viverra
        luctus neque at ultricies. Mauris suscipit ante sit amet placerat
        porttitor. Etiam finibus quis augue ut pharetra. Ut malesuada erat nec
        dolor ullamcorper, vitae bibendum sapien commodo. Fusce posuere, lectus
        vel placerat gravida, purus lectus faucibus diam, sed auctor arcu augue
        a purus. Donec ornare ac eros vitae aliquet. Maecenas ac justo vitae
        ante dignissim consectetur sed vel nisl. Duis purus sem, pulvinar ut
        augue hendrerit, gravida aliquam nisi. <br />
        <br />
        Maecenas eleifend sapien sed velit consequat, in vestibulum neque
        rhoncus. Ut tempus posuere massa, non ultricies ante iaculis id. In
        faucibus, massa in eleifend ullamcorper, elit dolor egestas velit, non
        maximus elit leo ut orci. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc faucibus ultrices lorem ut imperdiet. Suspendisse
        felis neque, posuere in erat at, tempus sollicitudin enim. Nunc suscipit
        aliquet ligula, eget venenatis libero euismod vitae. Cras et malesuada
        lectus, in eleifend orci. Fusce tempus eros metus, eu aliquet mauris
        vulputate vitae.{" "}
      </p>
      <div
        id="image-Home"
        style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: "0 auto" }}
      >
        <Image />
      </div>

      <br />
      <AniLink
        cover
        to="404"
        direction="left"
        duration={3}
        bg="
    url(https://source.unsplash.com/random)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
      >
        Go to About
      </AniLink>
      <br />
      <AniLink swipe direction="up" to="using-typescript" duration={3}>
        Go to Contact
      </AniLink>
    </Layout>
  )
}

export default IndexPage
