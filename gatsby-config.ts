import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Time 4 OT`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins:
        ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: "./src/assets/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "other",
                path: "./src/assets/other/"
            },
            __key: "other"
        }, {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: "Time 4 OT",
                short_name: "Time 4 OT",
                icon: 'src/assets/images/favicon.png',
            },
        }
    ]
};

export default config;
