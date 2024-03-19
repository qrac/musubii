export function DemoOptions({ children }: { children: React.ReactNode }) {
  return <div className="demo-options">{children}</div>
}

export function DemoOption({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="demo-option">
      {title && <legend className="demo-legend">{title}</legend>}
      <div className="demo-labels">{children}</div>
    </fieldset>
  )
}

export function DemoRadios<T extends string | undefined>({
  patterns,
  checkedValue,
  onChange,
}: {
  patterns: ReadonlyArray<T> | Array<T>
  checkedValue?: T
  onChange: (value: T) => void
}) {
  return (
    <>
      {patterns.map((item, index) => (
        <label key={index} className="demo-label">
          <input
            type="radio"
            onChange={() => onChange(item)}
            checked={checkedValue === item}
          />
          <span>{item ? item : "unset"}</span>
        </label>
      ))}
    </>
  )
}

export function DemoCheckbox({
  label,
  checkedValue,
  onChange,
}: {
  label: string
  checkedValue?: boolean
  onChange: (selected: boolean) => void
}) {
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.checked)
  }
  return (
    <label className="demo-label">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={checkedValue}
      />
      <span>{label}</span>
    </label>
  )
}
