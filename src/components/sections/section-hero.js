import Link from "next/link"

export default () => {
  return (
    <section className="section is-hero">
      <div className="inner is-padding-right-left-md">
        <Link href="/styles/elements/button">
          <a>Go Button</a>
        </Link>
      </div>
    </section>
  )
}
