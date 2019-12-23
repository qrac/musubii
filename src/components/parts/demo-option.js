export default ({ children, title }) => {
  return (
    <div className="demo-option">
      {(() => {
        if (title) {
          return <div className="demo-option-title">{title}</div>
        }
      })()}
      {children}
    </div>
  )
}
