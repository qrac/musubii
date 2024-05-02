export function ExampleReset() {
  return (
    <div className="demo-boxes">
      <ExampleResetHeading />
      <ExampleResetParagraph />
      <ExampleResetAddress />
      <ExampleResetDetails />
      <ExampleResetCode />
      <ExampleResetList />
      <ExampleResetTable />
      <ExampleResetHr />
      <ExampleResetButton />
      <ExampleResetForm />
      <ExampleResetProgress />
      <ExampleResetMedia />
      <ExampleResetSvg />
    </div>
  )
}

function ExampleResetHeading() {
  return (
    <div className="demo-box">
      <h1>見出しh1</h1>
      <h2>見出しh2</h2>
      <h3>見出しh3</h3>
      <h4>見出しh4</h4>
      <h5>見出しh5</h5>
      <h6>見出しh6</h6>
    </div>
  )
}

function ExampleResetParagraph() {
  return (
    <div className="demo-box">
      <p>文章p</p>
      <p>
        <span>文字span</span>｜<strong>太文字strong</strong>｜<b>太文字b</b>｜
        <small>小さい文字small</small>｜<a href="">リンクa</a>
      </p>
      <p>
        <span>abbrは略語と頭字語。</span>
        <abbr title="Hypertext Markup Language">HTML</abbr>
        <span>という使い方。</span>
      </p>
      <p>
        <span>markは</span>
        <mark>ハイライト</mark>
        <span>するときに使用。</span>
      </p>
      <p>
        <span>subは下付き文字。</span>
        <span>H</span>
        <sub>2</sub>
        <span>など。</span>
      </p>
      <p>
        <span>supは上付き文字。</span>
        <span>A</span>
        <sup>2</sup>
        <span>など。</span>
      </p>
    </div>
  )
}

function ExampleResetAddress() {
  return (
    <div className="demo-box">
      <address>アドレスaddress</address>
    </div>
  )
}

function ExampleResetDetails() {
  return (
    <div className="demo-box">
      <details>
        <summary>概要明示要素summary</summary>
        <p>詳細の文章</p>
      </details>
    </div>
  )
}

function ExampleResetCode() {
  return (
    <div className="demo-box">
      <pre>
        <code>pre, code</code>
      </pre>
      <p>
        Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to
        re-render an MDN page.
      </p>
      <p>I was trying to boot my computer, but I got this hilarious message:</p>
      <p>
        <samp>
          Keyboard not found <br />
          Press F1 to continue
        </samp>
      </p>
    </div>
  )
}

function ExampleResetList() {
  return (
    <div className="demo-box">
      <ul>
        <li>リストul</li>
        <li>リストul</li>
      </ul>
      <ol>
        <li>リストol</li>
        <li>リストol</li>
      </ol>
    </div>
  )
}

function ExampleResetTable() {
  return (
    <div className="demo-box">
      <table>
        <thead>
          <tr>
            <th>表見出しth</th>
            <th>表見出しth</th>
            <th>表見出しth</th>
            <th>表見出しth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
          </tr>
          <tr>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
          </tr>
          <tr>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
            <td>表データセルtd</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>表見出しth</th>
            <th>表見出しth</th>
            <th>表見出しth</th>
            <th>表見出しth</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

function ExampleResetHr() {
  return (
    <div className="demo-box">
      <p>罫線hr</p>
      <hr />
      <p>罫線hr</p>
    </div>
  )
}

function ExampleResetButton() {
  return (
    <div className="demo-box">
      <button type="button">ボタン</button>
      <button type="button">button</button>
    </div>
  )
}

function ExampleResetForm() {
  return (
    <div className="demo-box">
      <form>
        <fieldset>
          <legend>TEXT</legend>
          <input type="text" placeholder="Text" />
          <input type="text" placeholder="Disabled" disabled />
          <input type="text" readOnly defaultValue="Readonly" />
        </fieldset>
        <fieldset>
          <legend>NUMBER</legend>
          <input type="number" step="10" />
          <input type="number" step="10" disabled />
        </fieldset>
        <fieldset>
          <legend>URL</legend>
          <input type="url" placeholder="example.com" />
          <input type="url" placeholder="example.com" disabled />
        </fieldset>
        <fieldset>
          <legend>E-MAIL</legend>
          <input type="email" placeholder="example@gmail.com" />
          <input type="email" placeholder="example@gmail.com" disabled />
        </fieldset>
        <fieldset>
          <legend>TEL</legend>
          <input
            type="tel"
            size={14}
            maxLength={12}
            placeholder="000-000-0000"
          />
          <input
            type="tel"
            size={14}
            maxLength={12}
            placeholder="000-000-0000"
            disabled
          />
        </fieldset>
        <fieldset>
          <legend>PASSWORD</legend>
          <input type="password" />
          <input type="password" disabled />
        </fieldset>
        <fieldset>
          <legend>SEARCH</legend>
          <input type="search" placeholder="Search" />
          <input type="search" placeholder="Search" disabled />
        </fieldset>
        <fieldset>
          <legend>DATETIME LOCAL</legend>
          <input type="datetime-local" defaultValue="2017-02-02T00:00:00" />
          <input
            type="datetime-local"
            disabled
            defaultValue="2017-02-02T00:00:00"
          />
        </fieldset>
        <fieldset>
          <legend>DATE</legend>
          <input type="date" defaultValue="2017-02-02" />
          <input type="date" disabled defaultValue="2017-02-02" />
        </fieldset>
        <fieldset>
          <legend>MONTH</legend>
          <input type="month" defaultValue="2017-02" />
          <input type="month" disabled defaultValue="2017-02" />
        </fieldset>
        <fieldset>
          <legend>TIME</legend>
          <input type="time" defaultValue="00:00:00" />
          <input type="time" disabled defaultValue="00:00:00" />
        </fieldset>
        <fieldset>
          <legend>FILE</legend>
          <input type="file" />
          <input type="file" disabled />
        </fieldset>
        <fieldset>
          <legend>COLOR</legend>
          <input type="color" defaultValue="#1cb4c7" />
          <input type="color" disabled defaultValue="#1cb4c7" />
        </fieldset>
        <fieldset>
          <legend>RANGE</legend>
          <input type="range" />
          <input type="range" disabled />
        </fieldset>
        <fieldset>
          <legend>TEXTAREA</legend>
          <textarea />
          <textarea disabled />
        </fieldset>
        <fieldset>
          <legend>RADIO</legend>
          <label>
            <input type="radio" name="radio-default-1" defaultChecked />
            <span>むすびー</span>
          </label>
          <label>
            <input type="radio" name="radio-default-1" />
            <span>むすびい</span>
          </label>
          <label>
            <input type="radio" name="radio-default-1" disabled />
            <span>むすび</span>
          </label>
        </fieldset>
        <fieldset>
          <legend>CHECKBOX</legend>
          <label>
            <input type="checkbox" name="checkbox-default-1" defaultChecked />
            <span>HTML</span>
          </label>
          <label>
            <input type="checkbox" name="checkbox-default-1" />
            <span>CSS</span>
          </label>
          <label>
            <input type="checkbox" name="checkbox-default-1" disabled />
            <span>JS</span>
          </label>
        </fieldset>
        <fieldset>
          <legend>SELECT</legend>
          <select>
            <option>Select A</option>
            <option>Select B</option>
            <option>Select C</option>
            <option>Select D</option>
            <option>Select E</option>
          </select>
          <select disabled>
            <option>Select A</option>
            <option>Select B</option>
            <option>Select C</option>
            <option>Select D</option>
            <option>Select E</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>SELECT MULTIPLE</legend>
          <select multiple>
            <option>Select A</option>
            <option>Select B</option>
            <option>Select C</option>
            <option>Select D</option>
            <option>Select E</option>
          </select>
          <select multiple disabled>
            <option>Select A</option>
            <option>Select B</option>
            <option>Select C</option>
            <option>Select D</option>
            <option>Select E</option>
          </select>
        </fieldset>
        <p>
          <input type="button" defaultValue="インプットボタン" />
          <input type="button" disabled defaultValue="インプットボタン" />
        </p>
        <p>
          <input type="reset" />
          <input type="reset" disabled />
        </p>
        <p>
          <input type="submit" />
          <input type="submit" disabled />
        </p>
      </form>
    </div>
  )
}

function ExampleResetProgress() {
  return (
    <div className="demo-box">
      <progress></progress>
    </div>
  )
}

function ExampleResetMedia() {
  return (
    <div className="demo-box">
      <figure>
        <img
          src="https://i.gyazo.com/a21c7b01996b7640ff84a1d6788135ea.png"
          width={2400}
          height={1084}
          alt="MUSIBii site in dark theme"
        />
        <figcaption>キャプション</figcaption>
      </figure>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/llQkSr6fzXg"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function ExampleResetSvg() {
  return (
    <div className="demo-box">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 10 60 10 30 Z" />
      </svg>
    </div>
  )
}
