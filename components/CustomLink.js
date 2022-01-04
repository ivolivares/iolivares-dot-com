/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.js
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

  const externalProps = {...props}

  if (props.className) {
    externalProps.classNames = props.className
  }

  return <ExternalLink {...externalProps} />
}

export default CustomLink