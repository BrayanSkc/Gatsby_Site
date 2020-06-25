import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TimelineMax, Back } from "gsap"

const NotFoundPage = () => {
  useEffect(() => {
    let tl = new TimelineMax({ onUpdate: updateSlider })
    tl.from(
      "#title",
      4,
      { scale: 0.5, opacity: 0, x: -100, ease: Back.easeOut },
      0.5
    ).from("#paragraph", 1, { x: 10, opacity: 0, ease: Back.easeOut })
  }, [])
//Comentario
  const updateSlider = () => {
    console.log("object")
  }

  return (
    <Layout>
      <SEO title="About" />
      <h1 style={{ textAlign: "center" }} id="title">
        About
      </h1>
      <p id="paragraph">
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
        Phasellus dictum vitae sapien eu viverra. Integer in felis eget lacus
        sollicitudin euismod. Curabitur pellentesque ultricies ornare. Integer
        non eros velit. Donec gravida eleifend lorem, sit amet porttitor ipsum
        sodales vitae. Sed eget quam mi. Sed eu viverra nunc. Aliquam at nibh
        nisi. Mauris venenatis malesuada lacus, eu porttitor massa dapibus eu.
        Nulla facilisi. Morbi interdum, enim posuere ullamcorper varius, sapien
        leo luctus ex, ut maximus velit velit eget leo..
      </p>
    </Layout>
  )
}

export default NotFoundPage
