import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default () => {
  const dateNowYear = new Date().getFullYear()
  return (
    <p className="text is-center is-sm">
      <span className="text is-font-sans-en">©</span>&nbsp;
      <a
        className="text is-link-reverse"
        href={pkg.organization.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="text is-font-sans-en">{pkg.organization.name}</span>
      </a>
      &nbsp;
      <span className="text is-font-sans-en">
        {pjt.site.start_year ? pjt.site.start_year : ""}
        {pjt.site.start_year != dateNowYear ? " - " : ""}
        {pjt.site.start_year != dateNowYear ? dateNowYear : ""}
      </span>
    </p>
  )
}
