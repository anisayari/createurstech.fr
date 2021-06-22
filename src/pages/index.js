import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const streamers = data.allStreamersJson.nodes

  if (streamers.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All streamers" />
        <Bio />
        <p>
          Aucun Streamer trouvé.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All Streamers" />
      <ol style={{ listStyle: `none` }}>
        {streamers.map(streamer => {
          const title = streamer.name

          return (
            <li key={streamer.fields.slug}>
              <img className="streamer-avatar" src={streamer.avatar} alt={streamer.name}/>
              <Link to={streamer.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
              <p>
                    {streamer.bio}
              </p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    },
    allStreamersJson {
      nodes {
        name
        bio
        youtubeUrl
        twitchUrl
        fields {
          slug
        }
        avatar
      }
    }
  }
`
