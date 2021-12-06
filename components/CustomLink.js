/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io/blob/main/@io/components/MDXComponents.js
 */
import Link from 'next/link'
import ExternalLink from '@io/components/ExternalLink'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <ExternalLink {...props} />
}

export default CustomLink