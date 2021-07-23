import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby";
import '../scss/index.scss';
// import { StaticImage } from "gatsby-plugin-image"

// import Seo from "../components/seo"

interface Props {}

const IndexPage: React.FunctionComponent<Props> = ( props ) => {
  const data = useStaticQuery( graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  ` );
  const [ title, setTitle ] = useState( data.site.siteMetadata?.title );
  setTimeout(() => {
    setTitle( 'title has changed !!!!!!!!' );
  }, 2000);
  return (
    <div className={ `container` }>{ title }</div>
  );
}

export default IndexPage;

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
