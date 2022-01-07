import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { TerminalContextProvider } from "react-terminal";
import Header from "../components/header"
import Terminal from "../components/terminal"
import BlogPosts from "../components/blogposts"
import Board from "../components/board"


const SectionHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
  max-width: 320;
  text-align: center;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 800px;
`

const SubSection = styled.section`
  margin: 2.5rem 0;
  padding-bottom: 2rem;
  border-bottom: 2px dashed #8c8b8b;
`

const SubSectionLink = styled.a`
  text-decoration: none;
  color: #282828;
  font-weight: 600;

  &:hover {
    text-decoration: underline; 
  }
`

// markup
const IndexPage = () => {
  return (
    <TerminalContextProvider>
      <Fragment>
        <Helmet>
          <title>VIT Linux Users Group</title>
          <meta
            name="description"
            content="Official Website for VIT-LUG"
          />
          <meta name="referrer" content="origin" />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          <Header />

          <SubSection id="about">
            <SectionHeading>About Us</SectionHeading>
          </SubSection>

          <SubSection id="blog">
            <SectionHeading>
              Blog Posts{" "} 
              <SubSectionLink href="https://medium.com/vit-linux-user-group" target="_blank"><small>(View All)</small></SubSectionLink>
              </SectionHeading>
            <BlogPosts />
          </SubSection>

          <SubSection id="board">
            <SectionHeading>Board Members 2022</SectionHeading>
            <Board />
          </SubSection>

          <SubSection id="projects">
            <SectionHeading>Projects</SectionHeading>
          </SubSection>


          <SubSection id="contact">
            <SectionHeading>Contact Us</SectionHeading>
          </SubSection>

          <Terminal />
        </Wrapper>
      </Fragment>
    </TerminalContextProvider>
  )
}

export default IndexPage
