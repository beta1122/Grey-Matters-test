import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: 'https://test-44.ghost.io',
        contentApiKey: '9af515c45e8344637dabca2e74'
      },
      
    },
    "gatsby-plugin-netlify",
  ],
}

export default config
