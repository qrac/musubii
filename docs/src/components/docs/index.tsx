import { FiExternalLink } from "react-icons/fi"

export function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children} <FiExternalLink className="icon is-dark-4" />
    </a>
  )
}

export function Docs({ children }: { children: React.ReactNode }) {
  return <div className="docs">{children}</div>
}
