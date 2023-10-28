const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      BackgroundImage: {
        'nebula-background-image': "url('../../../assets/jumbotron.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
})
