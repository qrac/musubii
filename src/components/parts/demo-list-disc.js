export default ({ children, props }) => {
  return (
    <ul className="demo-list is-disc" {...props}>
      {children}
    </ul>
  )
}
