# Orbis Cascade Alliance primo central package
[![GitHub package version](https://img.shields.io/github/package-json/v/alliance-pcsg/oca-central-package.svg)](https://github.com/alliance-pcsg/oca-central-package)
## contents

| customization | description | repository |
|-|-|-|
| toggle institutions | allows the list of summit borrowing institutions to be collapsed & expanded | [primo-explore-toggle-institutions](https://github.com/alliance-pcsg/primo-explore-custom-actions) |
<!-- | custom resource icons | adds a set of resource icons from the noun project to search results | [primo-explore-resource-icons](https://github.com/alliance-pcsg/primo-explore-resource-icons) | -->

## installation

download `dist/CENTRAL_PACKAGE.zip`. this file can be uploaded to the Primo Back Office customization manager.

## developing

**you'll need the latest versions of docker and docker-compose.**

the development environment has two parts:

- the central package code, located in `src`
- a generic view package called ALLIANCE, located in `test`

here's how to use them:
1. start a development server with `npm start`.
2. results will be visible at [http://localhost:8003/primo-explore/search?vid=ALLIANCE](http://localhost:8003/primo-explore/search?vid=ALLIANCE)
3. you can edit the code in the `src` folder and manually refresh to change the central package.
4. to test inheritance, you can also edit the code in the `test/ALLIANCE` folder as if you were developing that view. it will automatically refresh.
5. when finished, you can use `ctrl+c` to quit the dev environment and docker will clean up the container.

## building

when you're finished making changes:
1. run `npm run create-package` and choose `CENTRAL_PACKAGE` at the prompt.
2. a `CENTRAL_PACKAGE.zip` file will appear in `dist` (likely overwriting the previous one).
3. consider [bumping the version number](https://docs.npmjs.com/cli/version) using `npm version`.
4. if you cut a new release, consider uploading the `CENTRAL_PACKAGE.zip` file as a [build artifact](https://github.com/blog/1547-release-your-software) of the github release.
