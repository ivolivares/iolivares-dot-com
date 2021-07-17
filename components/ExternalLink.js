// eslint-disable react/jsx-no-target-blank

const ExternalLink = ({
  href, isIOLink = false, classNames = 'text-gray-500 hover:text-gray-600', children,
}) => (
  isIOLink ?
    <a
      className={classNames}
      target="_self"
      rel="prerender"
      href={href}
    >
      {children}
    </a>
  :
    <a
      className={classNames}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
)

export default ExternalLink
