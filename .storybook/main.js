module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(ts|tsx)"

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs"

  ],
  refs: {
    'design-system': { 
      title: "Second Storybook instance", 
      url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com"
    }
   }

  
}
