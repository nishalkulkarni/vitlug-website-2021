import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { TerminalContextProvider } from "react-terminal";
import Header from "../components/header"
import Terminal from "../components/terminal"
import BlogPosts from "../components/blogposts"
import Board from "../components/board"
import Projects from "../components/projects"
import About from "../components/about"
import Contacts from "../components/contacts"


const SectionHeading = styled.h1`
  margin-top: 0;
  text-align: center;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 960px;
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

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 2rem;
  h3 {
    font-weight: 300;
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
            <About />
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
            <SectionHeading>
              Projects{" "}
              <SubSectionLink href="https://github.com/orgs/vitlug/repositories?type=all" target="_blank"><small>(View All)</small></SubSectionLink>
            </SectionHeading>
            <Projects />
          </SubSection>


          <SubSection id="contact">
            <SectionHeading>Contact Us</SectionHeading>
            <Contacts />
          </SubSection>

          <SubSection id="terminal">
            <SectionHeading>Aye fellow CLI addict! :)</SectionHeading>
            <Terminal />
          </SubSection>

          <Footer>
            <h3>Made with ❤️ by VIT-LUG</h3>
          </Footer>

        </Wrapper>
      </Fragment>
    </TerminalContextProvider>
  )
}

export default IndexPage
