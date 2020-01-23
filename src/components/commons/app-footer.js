import SiteOther from "~/components/parts/site-other"
import SiteCopylight from "~/components/parts/site-copylight"

export default () => {
  return (
    <footer className="section is-footer is-padding-bottom-safe">
      <div className="inner is-padding-horizontal-md">
        <div className="box is-space-md">
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
