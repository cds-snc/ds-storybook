# CDS Design System in Storybook

> \*Note: This repo is work-in-progress

### Overview

This is an effort to identify the UI inventory used by CDS Platform products and showcase it in Storybook.

Some of the goals for this inventory are:

- Be a single source of truth for both Design and Development when it comes to best practices in UI.
- Serve as a testing tool, where designers can compare their Figma creations with what was built, and developers can check if their apps generate the correct HTML/CSS (no matter the tech-stack used)
- etc

### Features

In addition to having an overview of the Design System, the inventory will show:

- The generated UI element in HTML/CSS
- Preview of that element in Figma via an [integrated addon](https://github.com/pocka/storybook-addon-designs)
- Accessibility review via an [integrated addon](https://github.com/storybookjs/storybook/tree/master/addons/a11y)
- Code source in HTML via [storybook docs essential addon](https://storybook.js.org/docs/react/writing-docs/introduction)

### How to run it locally

To run locally, you need to have [Node.js](https://nodejs.org/) installed. Storybook is initialized via `react-scripts` and the stories can be written in React, but the end goal is to have them in HTML.

```sh
$ cd platform-storybook
$ npm i
$ npm run storybook
```

### Publish and deploy

The deployment to Heroku is setup automatically via the git integration: https://platform-storybook.herokuapp.com/

In order to publish your changes, please run the command `npm run build:storybook` and commit the generated changes in the folder `storybook-static`. More info on the [storybook publishing guide](https://storybook.js.org/docs/react/workflows/publish-storybook)


### Contributing

If you'd like to contribute, feel free to add stories under the `src` folder. More docs and tutorials on the [official Storybook page](https://storybook.js.org/docs/react/get-started/introduction)
