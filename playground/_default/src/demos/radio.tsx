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
