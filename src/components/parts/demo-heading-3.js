export default ({ children, props, id }) => {
  return (
    <h3 className="demo-heading-3" id={id} {...props}>
      <a href={"#" + id} className="demo-heading-anchor" aria-hidden="true">
        #
      </a>
      {children}
    </h3>
  )
}
