import Link from "next/link"

export default () => {
  return (
    <section className="section is-hero">
      <div className="inner is-padding-right-left-md">
        <Link href="/getting-started/introduction">
          <a className="button is-plain is-primary is-round is-lg">
            <span className="text is-strong">Getting Started</span>
          </a>
        </Link>
      </div>
    </section>
  )
}
