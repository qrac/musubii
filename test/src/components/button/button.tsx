export interface ButtonProps {
  variant: "solid" | "outline" | "ghost"
  color?: "primary" | "secondary" | "success" | "danger"
  text?: string
  isDisabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { variant, color, text, isDisabled } = props
  const classNames = ["button", `is-${variant}`, color && `is-${color}`].join(
    " "
  )
  return (
    <button type="button" className={classNames} disabled={isDisabled}>
      {text}
    </button>
  )
}
