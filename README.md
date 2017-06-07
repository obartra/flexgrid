[![CircleCI](https://circleci.com/gh/obartra/flexgrid/tree/master.svg?style=shield)](https://circleci.com/gh/obartra/flexgrid/tree/master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# ☁️ FlexGrid

12-column layout with Flexbox

## Demo

Check out the build [here](https://obartra.github.io/flexgrid)

## Setup

```bash
$ yarn && yarn start
```

And then open `localhost:9001`

## Structure

This project uses [StoryBook](https://github.com/storybooks/storybook), the configuration files are within the `/storybook` folder. The different stories are in the `/stories` folder and `/src` contains the react HOC and Components needed to generate the layout.

## CSS Usage

To use the standalone CSS files run `yarn build`, the `/dist` folder contains the built css artifacts.

## Contributing

Contributions are welcome! To standardize the commit format this project uses [commitizen](https://github.com/commitizen/cz-cli) with [conventional changelog](https://github.com/commitizen/cz-conventional-changelog). Instead of using git, to commit changes run `yarn commit`.

[Visual Studio Code](https://code.visualstudio.com/) with the [flow for vscode](https://github.com/flowtype/flow-for-vscode) and [prettier vscode](https://github.com/esbenp/prettier-vscode) plugins are recommended for development.