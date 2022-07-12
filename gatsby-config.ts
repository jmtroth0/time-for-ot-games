import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `time-for-ot`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "game_backgrounds",
      "path": "./src/assets/game_backgrounds/"
    },
    __key: "game_backgrounds"
  }]
};

export default config;
