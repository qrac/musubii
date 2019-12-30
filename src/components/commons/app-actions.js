import ToggleTheme from "~/components/parts/toggle-theme"

export default ({ checkHome }) => {
  return (
    <div className="box is-actions is-top-right">
      <ToggleTheme checkHome={checkHome} />
    </div>
  )
}
