export default ({ text, checked, parentChange }) => {
  return (
    <div className="demo-option-box is-margin-right-xl">
      <input
        className="input is-hidden"
        type="checkbox"
        onChange={() => parentChange()}
        checked={checked}
      />
      <label className="label is-middle" onClick={() => parentChange()}>
        <span className="checkbox is-margin-right-xxs"></span>
        <span className="text">{text}</span>
      </label>
    </div>
  )
}
