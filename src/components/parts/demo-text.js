export default ({ children, props }) => {
  return (
    <p className="demo-text" {...props}>
      {children}
    </p>
  )
}
