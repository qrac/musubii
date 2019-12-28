export default ({ value }) => {
  const colorBoxStyle = {
    backgroundColor: value
  }
  return <span className="demo-color-box" style={colorBoxStyle}></span>
}
