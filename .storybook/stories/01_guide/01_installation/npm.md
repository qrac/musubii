# Installation

## npm

MUSUBii のインストールは npm または Yarn で行います。

```bash
npm install musubii
```

```bash
yarn add musubii
```

### CSS Path

CSS ファイルは `package.json` で main に設定されています。※CSS Variables は有効化できません

```bash
musubii/dist/musubii.css
```

```bash
musubii/dist/musubii.min.css
```

### SCSS Path

SCSS ファイルは、全体用のコンフィグとスタイルを分けて読み込めます。

```bash
musubii/src/scss/configs/_import.scss
```

```bash
musubii/src/scss/styles/_import.scss
```

分ける必要が無ければ一括で読み込みます。

```bash
musubii/src/scss/musubii.scss
```

### CLI Build

npm scripts でビルドするには `node-sass` を利用します。

```json
{
  "scripts": {
    "build": "node-sass ./src/scss -o ./dist/assets/css --include-path ./node_modules --output-style expanded"
  }
}
```
