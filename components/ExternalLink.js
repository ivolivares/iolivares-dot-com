// eslint-disable react/jsx-no-target-blank

const ExternalLink = ({
  href, isIOLink = false, classNames = 'text-primary-400 hover:text-primary-600 dark:hover:text-primary-300', children,
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
      href={`${href}${href.indexOf('?') < 0 ? '?' : '&'}from=iolivares.com`}
    >
      {children}
    </a>
)

export default ExternalLink
