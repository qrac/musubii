import pkg from "../../../package.json"

export default () => {
  return (
    <span className="text is-font-sans-en is-line-height-xs is-xs">
      v{pkg.version}
    </span>
  )
}
