import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default () => {
  const contents = [
    {
      title: "Author",
      text: "Qrac",
      url: "https://twitter.com/" + pjt.site.twitter_id
    },
    {
      title: "GitHub",
      text: "Repository",
      url: pkg.repository
    },
    {
      text: "Releases",
      url: pkg.repository + "/releases"
    }
  ]
  return (
    <div className="grid is-center is-gap-sm">
      <div className="column">
        <p className="text is-sm">
          <span className="text">Licence: {pkg.license}</span>
        </p>
      </div>
      {contents.map((content, i) => (
        <div className="column" key={i}>
          <p className="text is-sm">
            {content.title ? (
              <span className="text">{content.title}: </span>
            ) : (
              ""
            )}
            <a
              className="text is-link-reverse"
              href={content.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text">{content.text}</span>
              <svg
                className="icon is-external-link is-opacity-xs"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 100 100"
              >
                <path d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                <polygon points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
              </svg>
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}
