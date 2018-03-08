
[![CircleCI](https://circleci.com/gh/mozilla/extensions-challenge/tree/master.svg?style=svg)](https://circleci.com/gh/mozilla/extensions-challenge/tree/master)

# Extensions Challenge (Website)

This is the Quantum Extensions Challenge website. It was built with Gatsby. This is a static website.

## Commands

### Run locally

```
yarn install 
# or
npm install
```

```
yarn run dev
# or
npm run dev
```

### Build

```
yarn run build
# or
npm run build
```

## Deployment

* Bump the version in package.json
* Make a release via the github UI - the tag should be a semver version e.g. `1.0.1`
* Circle will auto deploy
* You can verify the deployed version at https://extensionschallenge.com/__version__
