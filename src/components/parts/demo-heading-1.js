export default ({ children, props, id }) => {
  return (
    <h1 className="demo-heading-1" id={id} {...props}>
      {children}
    </h1>
  )
}
