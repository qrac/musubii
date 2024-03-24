export function DemoSelect<T extends string | undefined>({
  options,
  selectedValue,
  onChange,
}: {
  options: ReadonlyArray<T> | Array<T>
  selectedValue: T
  onChange: (value: T) => void
}) {
  return (
    <label className="demo-label">
      <select
        className="demo-select"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option ? option : "unset"}
          </option>
        ))}
      </select>
    </label>
  )
}
