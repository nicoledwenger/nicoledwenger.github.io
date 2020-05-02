import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "dogs" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

  /* const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nicoledwengerprofile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) */

  return (
    <div>
    {data.allFile.edges.map(image => (
      <Img
        fluid={image.node.childImageSharp.fluid}
        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
      />
    ))}
  </div>
    // <Img fluid={data.file.childImageSharp.fluid} />
  )
}

export default Image
