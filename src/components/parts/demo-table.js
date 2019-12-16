export default ({ children, props }) => {
  return (
    <div className="demo-table-wrap" {...props}>
      <table className="demo-table">{children}</table>
    </div>
  )
}
