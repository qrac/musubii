import pkg from "../../../package.json"

export default () => {
  return <span className="text is-xs">v{pkg.version}</span>
}
