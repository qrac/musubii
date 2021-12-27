export interface DemoRadiosProps {
  name: string
  items: string[]
  checkedItem: string | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const DemoRadios = (props: DemoRadiosProps) => {
  const { name, items, checkedItem, onChange } = props
  return (
    <div className="demo-labels">
      {items.map((item, index) => (
        <label className="demo-label" key={index}>
          <input
            type="radio"
            name={name}
            value={item}
            checked={checkedItem === item}
            onChange={onChange}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}
