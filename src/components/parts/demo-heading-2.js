export default ({ children, props, id }) => {
  return (
    <h2 className="demo-heading-2" id={id} {...props}>
      <a href={"#" + id} className="demo-heading-anchor" aria-hidden="true">
        #
      </a>
      {children}
    </h2>
  )
}
