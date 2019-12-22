export default ({ children, props }) => {
  return (
    <h1 className="demo-heading-1" {...props}>
      {children}
    </h1>
  )
}
