import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Time 4 OT`,
        siteUrl: `https://www.time4ot.com`,
        description: `Functional and educational occupational therapy games for children built by and for OTs`,
    },
    plugins:
        [
            "gatsby-plugin-sass",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
            "gatsby-plugin-gatsby-cloud",
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
        }, {
            resolve: `gatsby-plugin-google-gtag`, options: {
                trackingIds: [
                    "G-J5B94C5EWD",
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                },
            },
        }, {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'time4ot',
            },
        },
    ]
};

export default config;
