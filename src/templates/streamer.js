import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StreamerTemplate = ({ data, location }) => {
  const streamer = data.streamersJson
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={streamer.name}
        description={streamer.bio}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <img src={streamer.avatar} alt={streamer.name} />
          <h1 itemProp="headline">{streamer.name}</h1>
        </header>
        <section>
        <p>{streamer.bio}</p>
        <ul>
            { (() => { if (streamer.youtubeUrl) return <li><a href={streamer.youtubeUrl}>Youtube</a></li>})()}
            { (() => { if (streamer.twitchUrl) return <li><a href={streamer.twitchUrl}>Twitch</a></li>})()}
            { (() => { if (streamer.twitter) return <li><a href={streamer.twitter}>Twitter</a></li>})()}
        </ul>
        </section>
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={"/" + previous.fields.slug} rel="prev">
                ← {previous.name}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"/" + next.fields.slug} rel="next">
                {next.name} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default StreamerTemplate

export const pageQuery = graphql`
  query StreamerBySlug (
    $id: String!
    $previousStreamerId: String
    $nextStreamerId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    streamersJson(id: { eq: $id }) {
      id
      name
      bio
      avatar
      youtubeUrl
      twitchUrl
      twitter
    }

    previous: streamersJson(id: { eq: $previousStreamerId }) {
      fields {
        slug
      }
      name
    }
    next: streamersJson(id: { eq: $nextStreamerId }) {
      fields {
        slug
      }
      name
    }
  }
`
