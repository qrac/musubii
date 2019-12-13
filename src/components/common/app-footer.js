import NavContents from "~/components/parts/nav-contents"
import NavCopylight from "~/components/parts/nav-copylight"

export default () => {
  return (
    <footer className="section is-footer">
      <div className="inner is-padding-right-left-md">
        <div className="box is-padding-bottom-safe is-space-md">
          <div className="box">
            <NavContents />
          </div>
          <div className="box">
            <NavCopylight />
          </div>
        </div>
      </div>
    </footer>
  )
}
