# WYSIWYG

WYSIWYG や Markdown で生成した HTML タグに装飾を施すスタイルセットです。利用シーンは主に静的サイトジェネレーターや WordPress。

`.wysiwyg` で出力されるプレーンな HTML タグをラッピングします。要素の間隔を保つために `.is-space` も付与してください。

<demo-wysiwyg demo="basic"/>

```html
<div class="wysiwyg is-space">
  <h1>1番目に大きな見出し</h1>
  <h2>2番目に大きな見出し</h2>
  <h3>3番目に大きな見出し</h3>
  <h4>4番目に大きな見出し</h4>
  <h5>5番目に大きな見出し</h5>
  <h6>6番目に大きな見出し</h6>
  <p>WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには<code>.is-space</code>を付与します。主に、<a href="">データベース</a>からの動的な出力を行う「<strong>WordPress</strong>」などのプログラムを想定しています。</p>
  <p>WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには<code>.is-space</code>を付与します。主に、<a href="">データベース</a>からの動的な出力を行う「<strong>WordPress</strong>」などのプログラムを想定しています。</p>
  <ul>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します
      <ul>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
      </ul>
    </li>
  </ul>
  <hr>
  <p>WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには<code>.is-space</code>を付与します。主に、<a href="">データベース</a>からの動的な出力を行う「<strong>WordPress</strong>」などのプログラムを想定しています。</p>
  <ol>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します</li>
    <li>リストのテキストはインデントとリストスタイルを施します
      <ol>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
        <li>リストのテキストはインデントとリストスタイルを施します</li>
      </ol>
    </li>
  </ol>
  <p>WYSIWYG内のブロック要素も、他の要素のレギュレーションと同じで前後のオブジェクトの間隔を保つには<code>.is-space</code>を付与します。主に、<a href="">データベース</a>からの動的な出力を行う「<strong>WordPress</strong>」などのプログラムを想定しています。</p>
  <blockquote>引用の「blockquote」を使う場合。border-leftとbackground-colorを用いた装飾を施しています。</blockquote>
  <p>文章の途中にコードを書きたい場合は<code>code</code>タグで囲む。インラインでコードを表記することができるので、ちょっとしたコードへの説明が容易になります。逆に、コード自体をブロック化して全体を伝える場合は<code>pre</code>で囲み、以下のように表示させます。</p>
  <pre>
    <code>
      html {
        box-sizing: border-box;
        font-family: sans-serif;
        overflow-y: scroll;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
      }
    </code>
  </pre>
  <p>WYSIWYGのテキストには、<strong>強調表示</strong>・<em>イタリック表示</em>・
    <br>
    <s>打ち消し線</s>などのスタイルを用いることができます。その他、テーブルを組んだ場合は以下の通り。テーブル内のテキストを寄せる方向はインラインで書き込みます。
  </p>
  <table>
    <thead>
      <tr>
        <th align="left">Align left</th>
        <th align="center">Align Center</th>
        <th align="right">Align Right</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="left">左寄せ</td>
        <td align="center">通常</td>
        <td align="right">右寄せ</td>
      </tr>
      <tr>
        <td align="left">左寄せ</td>
        <td align="center">2行目</td>
        <td align="right">右寄せ</td>
      </tr>
      <tr>
        <td align="left">左寄せ</td>
        <td align="center">3行目</td>
        <td align="right">右寄せ</td>
      </tr>
      <tr>
        <td align="left">左寄せ</td>
        <td align="center">4行目</td>
        <td align="right">右寄せ</td>
      </tr>
    </tbody>
  </table>
</div>
```
