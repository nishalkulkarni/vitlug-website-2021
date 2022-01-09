import React from "react"
import styled from "styled-components"
import ProjectInfo from "../../content/projects.yml"

const Container = styled.section`
    margin-top: 3rem;
`

const ProjectWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  color: #282828;

  display: flex;
`

const ProjectIcon = styled.div`
  font-size: 64px;
`

const ProjectContent = styled.div`
  flex-grow: 4;
  margin: 0 2rem;
`

const PostTitle = styled.h2`
    font-size: 22px;
    margin: 10px 0;
`

const ProjectSourceLink = styled.a`
  text-decoration: none;
  color: #282828;
  height: 48px;
  width: 48px;
  padding 0;
  margin: auto 0;
  
  > * {
    height: 100%;
    width: 100%;
  }
`

export default function Projects() {
  return (
    <Container>
      {ProjectInfo &&
        ProjectInfo.map(({ name, description, icon, sourceLink }) => (
          <ProjectWrapper key={name}>
            <ProjectIcon>
              {icon}
            </ProjectIcon>
            <ProjectContent>
              <PostTitle>{name}</PostTitle>
              {description}
              <br />
            </ProjectContent>
            <ProjectSourceLink href={sourceLink} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </ProjectSourceLink>
          </ProjectWrapper>
        ))
      }
    </Container>
  )
}

