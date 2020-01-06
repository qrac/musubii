import ToggleTheme from "~/components/parts/toggle-theme"

export default ({ legacy, checkHome }) => {
  return (
    <div className="box is-actions is-top-right">
      {(() => {
        if (!legacy) {
          return <ToggleTheme checkHome={checkHome} />
        }
      })()}
    </div>
  )
}
