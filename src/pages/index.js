import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import "typeface-open-sans"
import profilePhoto from '../images/nicoledwengerprofile.jpg'
import Heading from '../components/text/Heading'
import SubHeading from '../components/text/SubHeading'
import SocialButtons from '../components/text/Social'
import About from '../components/About'
import Resume from '../components/Resume'
import Img from 'gatsby-image'
import { breakpoints } from '../components/Breakpoints'
import Paragraph from '../components/text/Paragraph'


const ProfilePhoto = styled.img`
  position: absolute;
  right: 5%;
  top: 10%;
  height: 625px;
  width: auto;
  opacity: 0.8;
  z-index: -10;
  box-shadow: 35px 20px 0 5px #0077ff;

  @media (max-width: ${breakpoints.mobileMax}) {
    position: relative;
    right: 0;
    margin-left: 0px;
    margin-top: 10px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
  }

`;

const WorkTitle = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 2rem;
  color: #212529;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const WorkLink = styled(Link)`
  text-decoration: none;
  > ${Paragraph} {
    color: #212529;
    opacity: 0;
    font-size: 0.75;
  }

  :hover {
      cursor: pointer;
      color: #d96c5b;
      transition-duration: 0.3s;
      text-decoration: none;

  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
  }
`; */

const ToRight = keyframes`
  0%{
    opacity: 0;
    width: 0;
  }

  100%{
    opacity: 1;
    width: 300px;
  }
`;

const DecorationLine = styled.span`
  display: block;
  height: 4px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  animation: 1s ease 0s 1 normal forwards running ${ToRight};

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
    margin-bottom: -70px;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
    margin-left: 0px;
  }
`;

/* const ProjectContainer = styled.div` 
  width: 45%;
  margin-bottom: 40px;
  margin-top: 0px;
  height: unset;
  transition-duration: 0.3s;
  filter: grayscale(20%);

  :nth-child(odd) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 7%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
}

  :hover {

    ${ProjectOverlay} {
      opacity: 1;
    }

    div {
        transform: scale(1.03);
        transition-duration: 0.3s;
    }

    img {
      filter: grayscale(100%);
    }

    ${Paragraph}{
      transition-duration: 0.3s;
      opacity: 1;

      > ${Line}{
        width: 20%;
      }
    }
    
  }
  
`; */

const Segment = styled.div` 
  margin-bottom: 50px;
  transition-duration: 0.3s;

  :nth-child(1) {
    width: 45%;
    margin-right: 50px;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  :nth-child(2) {
    width: 30%;

    @media (max-width: ${breakpoints.mobileMax}) {
      width: 100%;
      margin-left: 20px;
    }
  }
`;

const ProjectContainer = styled.div` 
  flex: 0 0 auto;
  width: 100%;

  :hover {

    img {
        transform: scale(1.03);
        transition-duration: 0.3s;
    }
  }
`;

const ProjectSegment = styled.div`
    width: 100vw;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: ${breakpoints.mobileMax}) {
      display: block;
      flex-wrap: nowrap;
      margin-top: 15%;
  }
`;

const DescriptionText = styled(Paragraph)`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: #212529;
`;

const TransitionNotifier = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;

const ToLeft = keyframes`
  0%{
    width: 112px;
  }

  49%{
    width: 0;
  }

  50% {
    width: 0;
  }

  100%{
    width: 112px;
  }
`;


const AnimationLine = styled.span`
  height: 4px;
  background-color: #0077ff;
  transition: width 0.5s ease;
  animation: 3s ease-in-out 0s 1 normal forwards running ${ToLeft};
  animation-iteration-count: infinite;
`;

const IndexPage = ({ data }) => {

  return (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: '725px', marginTop: '20%'}}>
      <DecorationLine/>
      <Heading>Hi, I'm Nicole, front end <span>developer</span>, <span>designer</span>, and strategic <span>communicator</span>.</Heading>
      <SubHeading>Currently an intern at General Motors and pursuing two degrees at Purdue University.</SubHeading>
    </div>
    <SocialButtons />
    <ProfilePhoto src={profilePhoto} alt="Nicole Dwenger Profile" />
    
    

    <SubHeading id="works" style={{marginTop: '25%'}}>Projects</SubHeading>
    {/* <WorkContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectContainer key={node.id}>
            <ProjectOverlayContainer>
             <Img 
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                alt={node.frontmatter.title}
                style={{ 
                  boxShadow: '0px 4px 10px 0 #efefef'}}
                 /> 

            <ProjectOverlay>
              <ProjectText>
              <WorkLink to={node.fields.slug}>
            <WorkTitle>
                {node.frontmatter.title}{" "}
              </WorkTitle>
              <Paragraph>
                View Project
                  <Line></Line>
              </Paragraph>
            </WorkLink>
              </ProjectText>
            
            </ProjectOverlay>
            </ProjectOverlayContainer>
            </ProjectContainer>
        ))}
    </WorkContainer> */}

    <WorkContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectContainer key={node.id}>
           
            <WorkLink to={node.fields.slug}>
            <ProjectSegment>
              <Segment>
                <img 
                  src={node.frontmatter.featuredImage.publicURL} 
                  alt={node.frontmatter.title}
                  style={{ 
                    boxShadow: '0px 4px 10px 0 #efefef'}}
                 /> 
              </Segment>
              
              <Segment>
                <WorkTitle>
                  {node.frontmatter.title}{" "}
                </WorkTitle>
                <DescriptionText>
                  {node.frontmatter.type} - {node.frontmatter.year}
                </DescriptionText>
              </Segment>
              </ProjectSegment>
            </WorkLink>
           
            </ProjectContainer>
        ))}
    </WorkContainer>
    <AnimationLine/>
    <TransitionNotifier>&#60; scroll &#62;</TransitionNotifier>
    
    <About />
    <Resume />
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            year
            type
            featuredImage {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
