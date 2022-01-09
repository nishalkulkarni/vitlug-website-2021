import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"


const BlogContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    cursor: pointer;
    margin-top: 3rem;
`

const PostCard = styled.div`
  flex: 0 1 calc(43% - 0.5rem);
  margin: 0.5rem;
`

const PostLink = styled.a`
  text-decoration: none;
  color: #282828;
`

const PostImg = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;

  ${PostCard}:hover & {
    transform: translateY(20px);
  }
`

const PostContent = styled.div`
  background: #fff;
  margin: 0 20px;
  padding: 20px;
  transform: translateY(-60px);
  transition: 0.3s ease;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);

  ${PostCard}:hover & {
    transform: translateY(-80px);
  }
`

const PostTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`

const PostSmall = styled.small`
  color: #999;
`

export default function BlogPosts() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allMediumPost(limit: 6, sort: {fields: createdAt, order: DESC}) {
                    edges {
                        node {
                        id
                        title
                        virtuals {
                            subtitle
                            previewImage {
                            imageId
                            }
                        }
                        author {
                            name
                        }
                        content {
                            subtitle
                        }
                        createdAt
                        medium_id
                        uniqueSlug
                        }
                    }
                    }
                }
            `}
            render={({ allMediumPost }) => (
                <BlogContainer>
                    {allMediumPost &&
                        allMediumPost.edges.map(({ node }) => (
                            <PostCard key={node.medium_id}>
                                <PostLink href={`https://medium.com/vit-linux-user-group/${node.uniqueSlug}`} target="_blank">
                                    <PostImg src={`https://miro.medium.com/max/1024/${node.virtuals.previewImage.imageId}`} alt={`${node.virtuals.subtitle}`} />
                                    <PostContent>
                                        <PostTitle>{node.title}</PostTitle>
                                            {node.content.subtitle}
                                            <br />
                                            <PostSmall>By {node.author.name} on {node.createdAt}</PostSmall>
                                        
                                    </PostContent>

                                </PostLink>
                            </PostCard>
                        ))
                    }
                </BlogContainer>
            )}
        />
    )
}

