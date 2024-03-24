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
