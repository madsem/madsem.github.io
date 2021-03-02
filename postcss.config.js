module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-preset-env')({ browsers: 'last 10 versions' }),
        require("autoprefixer")
    ]
};