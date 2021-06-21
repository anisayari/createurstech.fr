const path = require(`path`)
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // const rawData = fs.readFileSync('./src/data/streamers.json')
  // streamers = JSON.parse(rawData)
  // Define a template for a streamer
  const streamerTemplate = path.resolve(`./src/templates/streamer.js`)


  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all streamers data
  const streamersResult = await graphql(
    `
      {
        allStreamersJson(
          limit: 1000
        ) {
          nodes {
            id
            name
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (streamersResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your streamers data`,
      streamersResult.errors
    )
    return
  }

  const streamers = streamersResult.data.allStreamersJson.nodes

  if (streamers.length > 0) {
    streamers.forEach((streamer, index) => {
      const previousStreamerId = index === 0 ? null : streamers[index - 1].id
      const nextStreamerId = index === streamers.length - 1 ? null : streamers[index + 1].id
      createPage({
        path: streamer.fields.slug,
        component: streamerTemplate,
        context: {
          id: streamer.id,
          previousStreamerId,
          nextStreamerId,
        },
      })
    })
  }



  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }






}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `StreamersJson`) {
    const value = node.name
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
