# MUSUBii Optimize

MUSUBii を使ったテンプレートのクラス名を最適化する CLI ツール。

## Install

```sh
$ npm install -D musubii-optimize
```

## Usage

コマンド `musubii-optimize` の後に [glob](https://www.npmjs.com/package/fast-glob) 構文で現在地からの対象ファイルを指定し、行いたい処理をオプションでいずれか 1 つ以上付与してください。

```sh
$ musubii-optimize ./path/to/dir/**/*.html --short --flex --media
```

置換されるファイルとクラス名が表示されるので問題がなければ `Start overwriting?` に対して `Yes` を選択。中止する場合は `No` を選択または `control + c` で処理を停止させます。

```sh
✔ Detecting...

./path/to/dir/index.html
class="box is-padding-top-md" -> class="box is-pt-md"

✔ Start overwriting? › Yes
✔ Done
```

ファイルの差分を git で確認して問題がなければコミットしてください。

## Options

| option    | detail                                                                      |
| --------- | --------------------------------------------------------------------------- |
| `--short` | 短縮可能なクラス名を最適化 ex: `is-padding-top-md` -> `is-pt-md`            |
| `--flex`  | flex のクラス名を最適化 ex: `is-0` -> `is-flex-0`                           |
| `--media` | メディアクエリのクラス名を最適化 ex: `is-desktop-none` -> `desktop:is-none` |

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
