import AppHead from "~/components/commons/app-head"

export default ({ children, meta }) => {
  return (
    <div className="demo-wrapper">
      <AppHead meta={meta} />
      {children}
    </div>
  )
}
