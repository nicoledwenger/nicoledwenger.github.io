import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Heading from '../components/text/Heading'
import Img from 'gatsby-image'
import styled from "styled-components"
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'
import CallToAction from "../components/text/CallToAction"
import WorkSubHeading from '../components/text/WorkSubHeading'


const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;

  :nth-last-child(2) {
    margin-bottom: 25px;
  }
`;

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 15%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`;

const Container = styled.div` 
  width: 45%;
  margin-bottom: 80px;
  transition-duration: 0.3s;

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 7%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}
`;

const FeaturedImage = styled.img`
  position: absolute;
  max-width: 50%;
  left: 0;
  top: 15%;

  @media (max-width: ${breakpoints.mobileMax}) {
    position: fixed;
    max-width: 100vw;
  }
`;


export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.publicURL
    let image1Fluid = post.frontmatter.image1.childImageSharp.fluid
    let image2Fluid = post.frontmatter.image2.childImageSharp.fluid
    let image3Fluid = post.frontmatter.image3.childImageSharp.fluid
    return (
      <Layout key={post.id}>
        <div>
          <ProjectContainer>

          <Container>
              <FeaturedImage 
              src={featuredImgFluid} 
              alt={post.frontmatter.title} 
              style={{ 
                boxShadow: '0px 4px 10px 0 #efefef'}}/>
            </Container>

            <Container> 
              <Heading style={{marginTop: '0'}}>{post.frontmatter.title}</Heading>
              <DescriptionText>{post.frontmatter.type} - {post.frontmatter.year} </DescriptionText>
              <DescriptionText>{post.frontmatter.role1} / {post.frontmatter.role2} / {post.frontmatter.role3} </DescriptionText>
              <CallToAction dangerouslySetInnerHTML={{ __html: post.html }}></CallToAction>
            </Container>

           
            <Container>
              <WorkSubHeading>About this Project</WorkSubHeading>
            </Container>

            <Container>
              <Paragraph>{post.frontmatter.objective}</Paragraph>
              <Paragraph>{post.frontmatter.results}</Paragraph>
            </Container>
            
           <Container>
               <Img 
                fluid={image1Fluid} 
                alt="First example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef'}}/> 
            </Container>

            <Container>
               <Img 
                fluid={image2Fluid} 
                alt="Second example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef'}}/> 
            </Container>

            <Container>
               <Img 
                fluid={image3Fluid} 
                alt="Third example photo"
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef'}}/> 
            </Container>
          </ProjectContainer>
          </div>
      </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        type
        objective
        results
        role1
        role2
        role3
        title
        year
        featuredImage {
          publicURL
        }
        image1 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`