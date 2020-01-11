export default ({ patterns, checked, parentChange }) => {
  return (
    <div className="demo-option-box is-margin-right-md">
      <div className="select">
        <select value={checked} onChange={e => parentChange(e.target.value)}>
          {patterns.map(patternEl => (
            <option value={patternEl.value} key={patternEl.id}>
              {patternEl.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
