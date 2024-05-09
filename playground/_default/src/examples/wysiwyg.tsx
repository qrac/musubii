export function ExampleWysiwyg() {
  return (
    <div className="demo-boxes">
      <ExampleWysiwygHeading />
      <ExampleWysiwygText />
      <ExampleWysiwygLink />
      <ExampleWysiwygBlockquote />
      <ExampleWysiwygCode />
      <ExampleWysiwygList />
      <ExampleWysiwygTable />
      <ExampleWysiwygDefinitionList />
      <ExampleWysiwygFigure />
    </div>
  )
}

function ExampleWysiwygHeading() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <h1>見出しh1</h1>
        <h2>見出しh2</h2>
        <h3>見出しh3</h3>
        <h4>見出しh4</h4>
        <h5>見出しh5</h5>
        <h6>見出しh6</h6>
      </div>
    </div>
  )
}

function ExampleWysiwygText() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <p>
          WYSIWYGには、<small>小さい文字</small>・<strong>強調</strong>・
          <em>イタリック</em>・<del>打ち消し線</del>
          などのスタイルが使えます。
        </p>
      </div>
    </div>
  )
}

function ExampleWysiwygLink() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <p>
          WYSIWYG内の<a href="#">アンカータグ</a>は自動的に装飾されます。
        </p>
      </div>
      <div className="wysiwyg is-link-reverse">
        <p>
          WYSIWYG内の<a href="#">アンカータグ</a>は自動的に装飾されます。
        </p>
      </div>
    </div>
  )
}

function ExampleWysiwygBlockquote() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <blockquote>
          WYSIWYG内で引用のblockquoteタグを使った場合の装飾。
        </blockquote>
      </div>
    </div>
  )
}

function ExampleWysiwygCode() {
  return (
    <>
      <div className="demo-box">
        <div className="wysiwyg">
          <p>
            WYSIWYG内に<code>code</code>を表示させる。
          </p>
        </div>
      </div>
      <div className="demo-box">
        <div className="wysiwyg">
          <pre>
            <code>{".my-css { color: red; }"}</code>
          </pre>
        </div>
      </div>
    </>
  )
}

function ExampleWysiwygList() {
  const exampleText =
    "リストはインデントしてテキストが折り返した場合に読みやすくする"
  return (
    <>
      <div className="demo-box">
        <div className="wysiwyg">
          <ul>
            <li>
              {exampleText}
              <ul>
                <li>{exampleText}</li>
                <li>{exampleText}</li>
                <li>{exampleText}</li>
              </ul>
            </li>
            <li>{exampleText}</li>
            <li>{exampleText}</li>
          </ul>
        </div>
      </div>
      <div className="demo-box">
        <div className="wysiwyg">
          <ol>
            <li>
              {exampleText}
              <ol>
                <li>{exampleText}</li>
                <li>{exampleText}</li>
                <li>{exampleText}</li>
              </ol>
            </li>
            <li>{exampleText}</li>
            <li>{exampleText}</li>
          </ol>
        </div>
      </div>
    </>
  )
}

function ExampleWysiwygTable() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <table>
          <thead>
            <tr>
              <th>見出しセル</th>
              <th>見出しセル</th>
              <th>見出しセル</th>
              <th>見出しセル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>データセル</td>
              <td>データセル</td>
              <td>データセル</td>
              <td>データセル</td>
            </tr>
            <tr>
              <td>データセル</td>
              <td>データセル</td>
              <td>データセル</td>
              <td>データセル</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ExampleWysiwygDefinitionList() {
  const exampleTitle = "定義リストタイトル"
  const exampleText =
    "これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。"
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <dl>
          <dt>{exampleTitle}</dt>
          <dd>{exampleText}</dd>
          <dt>{exampleTitle}</dt>
          <dd>{exampleText}</dd>
          <dt>{exampleTitle}</dt>
          <dd>{exampleText}</dd>
        </dl>
      </div>
    </div>
  )
}

function ExampleWysiwygFigure() {
  return (
    <div className="demo-box">
      <div className="wysiwyg">
        <figure>
          <img
            src="https://i.gyazo.com/a21c7b01996b7640ff84a1d6788135ea.png"
            alt="MUSIBii site in dark theme"
          />
          <figcaption>MUSUBiiのダークテーマ</figcaption>
        </figure>
      </div>
    </div>
  )
}
