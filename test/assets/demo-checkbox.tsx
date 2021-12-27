export interface DemoCheckboxProps {
  name?: string
  value?: string
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const DemoCheckbox = (props: DemoCheckboxProps) => {
  const { name, value, isChecked, onChange } = props
  return (
    <label className="demo-label">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <span>{value}</span>
    </label>
  )
}
