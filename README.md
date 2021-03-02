# Klever.Global Corp Website

This website needs to be built locally and is deployed to Guthub Pages, by making a commit.

## Development Usage

### :exclamation: Prerequisites

Clone this repository and run:

```bash
npm install
```

### Use Hugo Commands To Create Content

NOTE: currently **not** working for multi-lingual sites, because of this issue:
https://github.com/gohugoio/hugo/issues/5233

For now just copy/paste existing content to create new content.

```bash
# create a new product (will create archetype template)
hugo -s site --contentDir="content/de" new some_page.md
```

### :construction_worker: Development:

During development use:

```bash
npm run dev
```

or for developing with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview the site.  
Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### :package: Production Build:

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run prod
```

To get a preview of posts or articles not yet published, run:

```bash
npm run prod:preview
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and sections
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder, without any processing.
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--js               // Webpack will bundle imported JS separately
|  |--fonts            // Will be copied into /dist/fonts
|  |--img              // Will be optimized/compressed & copied to dist. This is for asset images, not Hugo content images.
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. These files are not in any way minified or compressed.

Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

All files & assets in `src/*` will be run through webpack before being copied to `dist`.
Images are optimized & compressed. The `src/img` dir, is meant for asset images, not Hugo images that are part of content.

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.


# Insert Markdown Images In Pages / Posts 
To insert one or more images into any markdown content,
use the `img` shortcode.

```markdown
lorem ipsum dolor blah...
{{< img src="someimage.jpg" alt="this is the alt text" >}}

# Some Title
```

The image is relative to the page bundle, for example the above image should be saved in: `content/en/products/password-managers/dashlane/someimage.jpg`


# Override Layout For A Landing Page
To have a landing page have a different design, add a layout in the landing page `_index.md`.
Like so:
```YAML
# could also be password-managers-de
layout: password-managers
```
Repeat this for all languages of the password manager lander, where the unique design should be shown.

Then copy the `layouts/products/list.html`, name it according to the layout set in list page.
In this example `layouts/products/password-managers.html`.
