import React from "react"
import Helmet from "react-helmet"
import "../stylesheets/screen.scss"

export default class Layout extends React.Component {
  render() {
    const description = "What do people think is currently missing from CSS?"
    const url = "https://whatsmissingfromcss.com"
    const image = "https://whatsmissingfromcss.com/images/whatsmissing.png"
    const title = "What's Missing From CSS?"
    const meta = [
      { charset: "utf-8" },
      { name: "description", content: description },
      // responsive
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // facebook
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      // twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image:src", content: image },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ]

    return (
      <div className="Wrapper">
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
        >
          <title>{title}</title>
          {meta.map((tag, i) => (
            <meta key={i} {...tag} />
          ))}
          <meta
            name="google-site-verification"
            content="hrTRsz9fkGmQlVbLBWA4wmhn0qsI6_M3NKemTGCkpps"
          />
          {/* <script
                        src="//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js"
                        type="text/javascript"
                    /> */}
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500,400i"
            rel="stylesheet"
          />
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}
