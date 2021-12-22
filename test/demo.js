const DemoRadios = ({ items, name, checked, action }) => {
  return (
    <div className="demo-radios">
      {items.map((item, index) => (
        <label className="demo-radio" onClick={() => action(item)} key={index}>
          <input
            type="radio"
            name={name}
            onChange={() => action(item)}
            checked={checked === item}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

export { DemoRadios }
