# NixCon NA 2024 Website

This repository contains the website for NixCon NA 2024 in Pasadena, CA, USA.

## Build

Builds are run using nix-flakes, so you just need to run:

```shell
nix build
```

The resulting derivation will contain the servable website contents in it's root.

## Development

The flake provides a shell which you can invoke with `nix shell`,
otherwise you will have to have `nodejs` installed. Then you can run:

```shell
npm install
npm run dev
```

