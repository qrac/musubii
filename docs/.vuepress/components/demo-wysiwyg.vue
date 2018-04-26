<template lang="pug">
.group.is-wrap
  .inner
    .group(v-if="demo === 'basic'")
      .wysiwyg.is-space
        h1 1番目に大きな見出し
        h2 2番目に大きな見出し
        h3 3番目に大きな見出し
        h4 4番目に大きな見出し
        h5 5番目に大きな見出し
        h6 6番目に大きな見出し
        p
          | WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには
          code .is-space
          | を付与します。主に、
          a(href="") データベース
          | からの動的な出力を行う「
          strong WordPress
          | 」などのプログラムを想定しています。
        p
          | WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには
          code .is-space
          | を付与します。主に、
          a(href="") データベース
          | からの動的な出力を行う「
          strong WordPress
          | 」などのプログラムを想定しています。
        ul
          li リストのテキストはインデントとリストスタイルを施します
          li リストのテキストはインデントとリストスタイルを施します
          li リストのテキストはインデントとリストスタイルを施します
          li
            | リストのテキストはインデントとリストスタイルを施します
            ul
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
        hr
        p
          | WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには
          code .is-space
          | を付与します。主に、
          a(href="") データベース
          | からの動的な出力を行う「
          strong WordPress
          | 」などのプログラムを想定しています。
        ol
          li リストのテキストはインデントとリストスタイルを施します
          li リストのテキストはインデントとリストスタイルを施します
          li リストのテキストはインデントとリストスタイルを施します
          li
            | リストのテキストはインデントとリストスタイルを施します
            ol
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
              li リストのテキストはインデントとリストスタイルを施します
        p
          | WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには
          code .is-space
          | を付与します。主に、
          a(href="") データベース
          | からの動的な出力を行う「
          strong WordPress
          | 」などのプログラムを想定しています。
        blockquote
          | 引用の「blockquote」を使う場合。border-leftとbackground-colorを用いた装飾を施しています。
        p
          | 文章の途中にコードを書きたい場合は&nbsp;
          code code
          | &nbsp;タグで囲む。インラインでコードを表記することができるので、ちょっとしたコードへの説明が容易になります。逆に、コード自体をブロック化して全体を伝える場合は&nbsp;
          code pre
          | &nbsp;で囲み、以下のように表示させます。
        pre
          code.
            html {
              box-sizing: border-box;
              font-family: sans-serif;
              overflow-y: scroll;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: transparent;
            }
        p
          | WYSIWYGのテキストには、
          strong 強調表示
          | ・
          em イタリック表示
          | ・
          br
          s 打ち消し線
          | などのスタイルを用いることができます。その他、テーブルを組んだ場合は以下の通り。テーブル内のテキストを寄せる方向はインラインで書き込みます。
        table
          thead
            tr
              th(align="left") Align left
              th(align="center") Align Center
              th(align="right") Align Right
          tbody
            tr
              td(align="left") 左寄せ
              td(align="center") 通常
              td(align="right") 右寄せ
            tr
              td(align="left") 左寄せ
              td(align="center") 2行目
              td(align="right") 右寄せ
            tr
              td(align="left") 左寄せ
              td(align="center") 3行目
              td(align="right") 右寄せ
            tr
              td(align="left") 左寄せ
              td(align="center") 4行目
              td(align="right") 右寄せ
</template>

<script>
export default {
  props: {
    demo: {
      type: String,
      default: ""
    }
  }
};
</script>