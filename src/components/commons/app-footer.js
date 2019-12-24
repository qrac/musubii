import SiteOther from "~/components/parts/site-other"
import SiteCopylight from "~/components/parts/site-copylight"

export default () => {
  return (
    <footer className="section is-footer">
      <div className="inner is-padding-right-left-md">
        <div className="box is-padding-bottom-safe is-space-md">
          <div className="box">
            <SiteOther />
          </div>
          <div className="box">
            <SiteCopylight />
          </div>
        </div>
      </div>
    </footer>
  )
}
