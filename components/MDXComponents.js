/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.js
 */
import Link from 'next/link'
import Image from 'next/image'

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

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const MDXComponents = {
  Image,
  a: CustomLink,
}

export default MDXComponents
