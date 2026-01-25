'use client'

import Link from 'next/link'

type WavyLinkProps = {
  href: string
  children: string
  className?: string
  external?: boolean
}

export default function WavyLink({ href, children, className = '', external = false }: WavyLinkProps) {
  const text = children

  const wavyContent = (
    <span className="wave-text">
      {Array.from(text).map((char, i) => (
        <span key={`${i}-${char}`} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-wave ${className}`}
      >
        {wavyContent}
      </a>
    )
  }

  return (
    <Link href={href} className={`link-wave ${className}`}>
      {wavyContent}
    </Link>
  )
}
