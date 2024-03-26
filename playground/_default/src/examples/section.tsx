import { Section } from "../components/section"

export function ExampleSection() {
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <Section>
          <div className="demo-card">{"section > inner"}</div>
        </Section>
      </div>
    </div>
  )
}
