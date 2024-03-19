# Mihoyo Wish Export Tool

English | [中文](https://github.com/Dongyifengs/mihoyo-wish-export/blob/main/README.md)

A small tool made with Electron, designed to run on 64-bit Windows operating systems.

It retrieves the necessary authKey to access the game's Wish Record API by reading game logs or using a proxy mode. The tool then uses the obtained authKey to fetch the game's wish records.

The tool saves data in the userData folder in the current directory. When new wish records are obtained, they are merged with the local data and saved.

For more detailed data analysis, you can use the webpage of this project after exporting the Excel file:[Link](https://github.com/voderl/genshin-gacha-analyzer)

## Development

```
# Install modules
yarn install

# Development mode
yarn dev

# Build an executable program
yarn build
```

## Lincense

[MIT](https://github.com/Dongyifengs/mihoyo-wish-export/blob/main/LICENSE)