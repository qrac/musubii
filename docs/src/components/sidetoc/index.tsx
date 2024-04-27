export function Sidetoc() {
  return (
    <aside className="sidetoc" id="sidetoc">
      <Menu />
    </aside>
  )
}

function Menu() {
  return (
    <div className="box is-space-xs is-font-sans-en">
      <h2 className="text is-strong is-xs">On this page</h2>
      <div data-sidetoc-box=""></div>
    </div>
  )
}
