import * as React from "react";

const HtmlAttributes = {
  lang: "en"
}

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes);
}
