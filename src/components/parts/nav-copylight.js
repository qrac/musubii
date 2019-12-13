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
        {pkg.organization.name}
      </a>
      &nbsp;
      <span className="text">
        {pjt.site.start_year ? pjt.site.start_year : ""}
        {pjt.site.start_year != dateNowYear ? " - " : ""}
        {pjt.site.start_year != dateNowYear ? dateNowYear : ""}
      </span>
    </p>
  )
}
