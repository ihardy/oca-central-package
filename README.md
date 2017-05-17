# oca-central-package
this repository serves as a reference point for up-to-date versions of the Orbis Cascade Alliance Primo central package.

## customizations in the package

| customization | description | repository |
|-|-|-|
| custom actions menu | adds custom actions to the actions menu, including links and the ability to view pnx records | [primo-explore-custom-actions](https://github.com/Alliance-PCJWG/primo-explore-custom-actions) |
| custom resource icons | adds a set of icons from the noun project to search results. | [primo-explore-resource-icons](https://github.com/Alliance-PCJWG/primo-explore-resource-icons) |
| worldcat search | appends an option to search WorldCat if there were no search results. | [primo-explore-worldcat-button](https://github.com/Alliance-PCJWG/primo-explore-worldcat-button) |

## installation

### alliance usage

just download CENTRAL_PACKAGE.zip.

### non-alliance developers: installing with npm

developers who wish to implement the set of customizations contained in this package in their own local view can use `npm`.

if you don't have a `package.json` as part of your view code, go to your local package directory (e.g. `/primo-explore/custom/LCC_NEWUI`) and run:
```sh
npm init
```

follow the prompts and fill out basic information for your package. then, to install the central package set of customizations:

```sh
npm install oca-central-package
```

the customizations will be added as dependencies to the central package and their code will appear in your `custom.js`.

please see the pages specific to the individual customizations in the package for their use.

### non-alliance developers: uninstalling with npm

from inside your package directory (e.g. `/primo-explore/custom/LCC_NEWUI`), run:

```sh
npm uninstall oca-central-package
```
