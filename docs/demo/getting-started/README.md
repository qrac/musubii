# Introduction

MUSUBii（むすびー）は [Yaku Han JP](https://qrac.github.io/yakuhanjp/) を開発しているデザイナーの[クラク](https://twitter.com/Qrac_JP)が作った CSS フレームワークです。マークアップを覚え始めた 2016 年から自分用に開発をスタート。

デザインや機能面のコーディングはフレームワークに依存させたくありません。そこで、大きなコンポーネント・JavaScript は含まず「リセット CSS + ベース CSS」というミニマムな構成を取っています。

MUSUBii を使うだけでサイトは完成しませんが、CSS を書いている時間・クロスブラウザでチェックする時間を大幅に減らすことはできます。そして、疲弊することなくデザイン・コーディングを進められます。

日本の Web デザイナーが腹ごなしに MUSUBii を使い、元気にデザインしてくれたら幸いです。

## How It Works

MUSUBii をベースにしたインブラウザデザインを想定しています。

もっとも簡単な使い方は、Minify された CSS ファイルをダウンロードするか CDN のリンクを貼る手法。SCSS が使えるプロジェクトであれば、npm インストールから変数をカスタマイズしつつコンパイルすると、CSS のオーバーライドも削減でき無駄がありません。

## More

開発初期にリセット CSS の [Shitaji.CSS](https://qrac.github.io/shitajicss/)、色を考えているときに [MOFTONE](https://qrac.github.io/moftone/) などのカラーセット、 SCSS 変数をまとめて外部化した [Sass Dashi](https://github.com/qrac/sass-dashi) が生まれ、MUSUBii には内包されています。
