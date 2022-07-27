import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Time 4 OT`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
        "name": "game_backgrounds",
        "path": "./src/assets/game_backgrounds/"
        },
        __key: "game_backgrounds"
    },
    {
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: "Time 4 OT",
            title: "Time 4 OT",
            short_name: "Time 4 OT",
            icon: 'src/images/favicon.png',
        },
    }]
};

export default config;
