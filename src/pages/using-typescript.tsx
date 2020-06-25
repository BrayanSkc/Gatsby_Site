// If you don't want to use TypeScript you can delete this file!
import React, { useEffect } from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink"
import { TweenMax, Power3, gsap, Elastic, TimelineMax, Back } from "gsap"
type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  useEffect(() => {
    let tl = new TimelineMax({ onUpdate: updateSlider })
    tl.from(
      ".textParagraph",
      4,
      { scale: 0.5, opacity: 0, x: -100, ease: Back.easeOut },
      0.5
    )

    // gsap.to(".textParagraph", 3, {
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
      <SEO title="Contact" />
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <p className="textParagraph">
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
        augue hendrerit, gravida aliquam nisi.
        <br />
        Maecenas eleifend sapien sed velit consequat, in vestibulum neque
        rhoncus. Ut tempus posuere massa, non ultricies ante iaculis id. In
        faucibus, massa in eleifend ullamcorper, elit dolor egestas velit, non
        maximus elit leo ut orci. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc faucibus ultrices lorem ut imperdiet. Suspendisse
        felis neque, posuere in erat at, tempus sollicitudin enim. Nunc suscipit
        aliquet ligula, eget venenatis libero euismod vitae. Cras et malesuada
        lectus, in eleifend orci. Fusce tempus eros metus, eu aliquet mauris
        vulputate vitae.
        <br />
        <br />
        Phasellus dictum vitae sapien eu viverra. Integer in felis eget lacus
        sollicitudin euismod. Curabitur pellentesque ultricies ornare. Integer
        non eros velit. Donec gravida eleifend lorem, sit amet porttitor ipsum
        sodales vitae. Sed eget quam mi. Sed eu viverra nunc. Aliquam at nibh
        nisi. Mauris venenatis malesuada lacus, eu porttitor massa dapibus eu.
        Nulla facilisi. Morbi interdum, enim posuere ullamcorper varius, sapien
        leo luctus ex, ut maximus velit velit eget leo. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Vestibulum imperdiet vestibulum
        lectus at finibus.
        <br />
        <br />
        Phasellus tincidunt nulla at eros fringilla posuere. Cras ligula nibh,
        viverra vitae dictum nec, bibendum sit amet ex. Nullam tempus risus et
        orci volutpat, a pellentesque sem iaculis. Quisque justo leo, semper
        vestibulum posuere ac, laoreet et nunc. Donec consectetur velit
        facilisis ante porta malesuada. Donec justo dui, pretium non ante sit
        amet, dapibus egestas nulla. Nullam et libero ac mauris interdum
        consequat. Sed fermentum orci odio, ac condimentum ipsum tincidunt et.
        In eget pellentesque risus. Maecenas ligula velit, lobortis ac metus id,
        hendrerit rhoncus odio. Duis nec interdum diam. Pellentesque ultricies
        enim orci, a volutpat nisl mollis ut. Vivamus porta vitae sapien non
        tincidunt. Vivamus dignissim sem eget metus ultrices, quis dictum odio
        elementum. Aenean aliquet sem eu mi euismod laoreet. Sed tempus
        consectetur enim, non consectetur libero gravida sit amet. Curabitur
        feugiat condimentum elementum. Suspendisse mollis erat vel sem semper,
        tempor egestas ligula dignissim. Fusce maximus pulvinar dapibus.
        Maecenas volutpat quam felis, nec venenatis lectus imperdiet eget.
        Aenean egestas turpis id sapien varius, eget rhoncus est posuere.
        Pellentesque lobortis luctus est, vel bibendum metus fringilla vitae.
        Vivamus blandit sapien justo, bibendum hendrerit est bibendum non.
      </p>
      {/* <AniLink swipe top="entry" to="/" entryOffset={80}>
      Go back to the homepage
    </AniLink> */}
      <TransitionLink
        to="/blog"
        exit={{
          length: 1,
        }}
        entry={{
          appearAfter: 2,
          delay: 0.6,
        }}
      >
        Go to Blog
      </TransitionLink>
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
