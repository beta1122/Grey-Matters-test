import * as React from "react"
import type { HeadFC, PageProps} from "gatsby"
import {graphql, useStaticQuery} from "gatsby"


type testQuery = {
  
  allGhostPost: {
    edges: {
      node: {
        slug: string;
        title: string;
        id: string;
        html: string;
        excerpt: string;
      };
    }[];
  };
  
};
const data: testQuery  = useStaticQuery(graphql`
  query {
    allGhostPost {
      edges {
        node {
          id
          title
          slug
          excerpt
          html
        }
      }
    }
  }
`)
const IndexPage: React.FC<PageProps> = () => {
  const data : testQuery = useStaticQuery(graphql`
    query {
      allGhostPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            html
          }
        }
      }
    }
  `)
  return (
    <main>
      <div>
        <h1> Grey Matters</h1>
      </div>
      <ul>
        {data.allGhostPost.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <a href={`/posts/${node.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
      <div>
        <button>Prev</button>
        <h3> page 1 of 3</h3>
        <button>Next</button>
        

      </div>
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

  