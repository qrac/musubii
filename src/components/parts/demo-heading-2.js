export default ({ children, props }) => {
  return (
    <h2 className="demo-heading-2" {...props}>
      {children}
    </h2>
  )
}
