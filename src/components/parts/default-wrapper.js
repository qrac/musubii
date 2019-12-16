import AppHead from "~/components/commons/app-head"

export default ({ children, meta }) => {
  return (
    <>
      <AppHead meta={meta} />
      {children}
    </>
  )
}
