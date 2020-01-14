export default ({ children, props }) => {
  return (
    <div className="demo-table-wrap-border" {...props}>
      <div className="demo-table-wrap">
        <table className="demo-table">{children}</table>
      </div>
    </div>
  )
}
