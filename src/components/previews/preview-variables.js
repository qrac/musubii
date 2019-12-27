import test from "../../assets/extracts/mode/simple/styles/elements/_wysiwyg.json"

export default ({ filePath }) => {
  console.log(test)
  console.log(test.variables[2].value)
  console.log(test.variables[2].compiledValue)
  return <div>{test.variables[2].compiledValue}</div>
}
