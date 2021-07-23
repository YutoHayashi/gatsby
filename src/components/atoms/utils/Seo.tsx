/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
    title: string;
    description: string;
    lang: string;
    meta: ConcatArray<{
        property: string;
        content: string | undefined;
        name?: undefined;
    } | {
        name: string;
        content: any;
        property?: undefined;
    }>;
}

const DEFAULT_PROPS: Pick<Props, 'description' | 'lang' | 'meta'> = {
    description: '',
    lang: 'ja',
    meta: [  ],
};

export const Seo: React.FunctionComponent<Partial<Props> & Pick<Props, 'title'>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const { site } = useStaticQuery( graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    ` );
    const metaDescription: string | undefined = props.description || site.siteMetadata?.description;
    const title = props.title;
    const lang = props.lang;
    const meta = props.meta;
    return (
        <Helmet htmlAttributes={ {
                lang,
            } }
            title={ title }
            titleTemplate={ title ? `%s | ${ title }` : undefined }
            meta={ [
                { name: `description`, content: metaDescription, },
                { property: `og:title`, content: title, },
                { property: `og:description`, content: metaDescription, },
                { property: `og:type`, content: `website`, },
                { name: `twitter:card`, content: `summary`, },
                { name: `twitter:creator`, content: site.siteMetadata?.author || ``, },
                { name: `twitter:title`, content: title, },
                { name: `twitter:description`, content: metaDescription, },
            ].concat( meta ) }
        />
    );
};
