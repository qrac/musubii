export default ({ children, props }) => {
  return (
    <li className="demo-item" {...props}>
      {children}
    </li>
  )
}
