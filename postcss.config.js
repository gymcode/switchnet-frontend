const tailwindcss = require('tailwindcss'); 
const { plugins } = require('tailwindcss/stubs/defaultConfig.stub');

module.exports = {
    plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
}