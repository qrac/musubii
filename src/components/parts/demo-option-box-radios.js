export default ({ patterns, checked, parentChange }) => {
  return (
    <>
      {patterns.map(patternEl => (
        <div className="demo-option-box is-margin-right-md" key={patternEl.id}>
          <input
            className="input is-hidden"
            type="radio"
            onChange={() => parentChange(patternEl.value)}
            checked={checked === patternEl.value}
          />
          <label
            className="label is-middle"
            onClick={() => parentChange(patternEl.value)}
          >
            <span className="radio is-margin-right-xxs"></span>
            <span className="text">{patternEl.text}</span>
          </label>
        </div>
      ))}
    </>
  )
}
