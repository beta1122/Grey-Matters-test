const path = require(`path`)
import { GatsbyNode } from "gatsby";

export const onPostBuild: GatsbyNode["onPostBuild"] = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`);
};
export const onPostBootstrap: GatsbyNode["onPostBuild"] = ({reporter}) => {
    reporter.info(`Gatsby has finished bootstrapping!`);
};

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const postTemplate = path.resolve(`src/templates/post.tsx`)
    type testQuery = {
        data?: {
            allGhostPost: {
            edges: {
                node: {
                    slug: string;
                    title: string;
                };
                }[];
            };
        };
        errors?: any;
    };
    ;
    const result: testQuery = await graphql(`
      query {
        allGhostPost{
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
    if(result && result.data !== undefined){
        result.data.allGhostPost.edges.forEach(edge => {
            createPage({
              path: `/posts/${edge.node.slug}`,
              component: postTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                    slug: edge.node.slug,
                },
            })
            reporter.info(`Generated a page at /${edge.node.slug}!`);
        })
    }
    
    


  }